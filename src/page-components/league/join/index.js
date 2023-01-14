import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import BackLink from 'Components/back-link';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import { $JoinLeagueWrapper } from './join.style';
import Metadata from 'Components/metadata';
import { useAppContext } from 'src/hooks/context';
import Error from 'PageComponents/error';
import { joinLeague } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { useRouter } from 'next/router';
import Loader from 'Components/loader';

const JoinLeague = () => {
  const { currentUser } = useAppContext();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [leagueId, setLeagueId] = useState(null);

  const handleJoinLeague = async () => {
    try {
      await joinLeague(leagueId, {
        user_id: isLoggedIn.user_id,
      });

      router.push(`/league/${leagueId}`);
    } catch (error) {
      addEvent('Error', responseError('Join League'));
    }
  };

  const getLoggedInStatus = () => {
    setIsLoggedIn(currentUser);
    setIsLoading(false);
  };

  useEffect(() => {
    if (!currentUser || !isLoggedIn) {
      getLoggedInStatus();
    }
  }, [currentUser]);

  if (!isLoggedIn) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <Metadata
        title="Join a League"
        description="Join an ABZ League and see if you can create the ultimate team and win the league"
      />
      <BackLink />
      <$GlobalContainer className="join">
        <$GlobalTitle>Join League</$GlobalTitle>
        <$JoinLeagueWrapper>
          <TextField
            placeholder="Enter your league code"
            onChange={setLeagueId}
          />
          <Button
            btnText="Enter League"
            btnColor="primary"
            customBtnClass="medium"
            btnFunction={handleJoinLeague}
          />
        </$JoinLeagueWrapper>
      </$GlobalContainer>
    </>
  );
};

export default JoinLeague;
