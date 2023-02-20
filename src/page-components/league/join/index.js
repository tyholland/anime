import React, { useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import BackLink from 'Components/back-link';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import { $JoinLeagueWrapper, $JoinLeagueImg } from './join.style';
import Metadata from 'Components/metadata';
import { joinLeague } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { useRouter } from 'next/router';
import ErrorMsg from 'Components/error-msg';
import { useAppContext } from 'src/hooks/context';
import Loader from 'Components/loader';

const JoinLeague = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [leagueHash, setLeagueHash] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleJoinLeague = async () => {
    setIsDisabled(true);
    setIsLoading(true);
    setErrorMsg(null);

    const payload = {
      hash: leagueHash,
    };

    try {
      const { leagueId } = await joinLeague(payload, currentUser?.token);

      addEvent('Join League', {
        league: leagueHash,
      });

      router.push(`/league/details?league_id=${leagueId}`);
    } catch (error) {
      addEvent('Error', responseError(error, 'Join League'));
      const nonUserMsg = 'Please login, in order to join a league.';
      error.response?.status === 401
        ? setErrorMsg(nonUserMsg)
        : setErrorMsg(error.response.data.message);
      setIsDisabled(true);
      setIsLoading(false);
    }
  };

  const handleLeagueHash = (val) => {
    setIsDisabled(false);
    setLeagueHash(val);
  };

  return (
    <>
      <Metadata
        title="Join a League"
        description="Join an ABZ League and see if you can create the ultimate team and win the league"
      />
      <BackLink />
      <$GlobalContainer>
        <$GlobalTitle>Join League</$GlobalTitle>
        <$JoinLeagueWrapper className={errorMsg && 'spacing'}>
          <div>
            <TextField
              placeholder="Enter your league code"
              onChange={handleLeagueHash}
              maxLength={11}
            />
            <Button
              btnText={isLoading ? <Loader isSmall={true} /> : 'Enter League'}
              btnColor="primary"
              customBtnClass="medium"
              btnFunction={handleJoinLeague}
              isDisabled={isDisabled}
            />
            {errorMsg && <ErrorMsg msg={errorMsg} />}
          </div>
          <$JoinLeagueImg src="/assets/background/vegito.png" alt="Vegito" />
        </$JoinLeagueWrapper>
      </$GlobalContainer>
    </>
  );
};

export default JoinLeague;
