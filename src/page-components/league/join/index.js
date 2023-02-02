import React, { useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import BackLink from 'Components/back-link';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import { $JoinLeagueWrapper, $JoinLeagueImg } from './join.style';
import Metadata from 'Components/metadata';
import { joinLeague } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import { getCookie, responseError } from 'Utils/index';
import { useRouter } from 'next/router';

const JoinLeague = () => {
  const router = useRouter();
  const [leagueHash, setLeagueHash] = useState(null);

  const handleJoinLeague = async () => {
    const payload = {
      hash: leagueHash,
    };

    try {
      const { leagueId } = await joinLeague(payload, getCookie('token'));

      addEvent('Join League', {
        league: leagueHash,
      });

      router.push(`/league/${leagueId}`);
    } catch (error) {
      addEvent('Error', responseError(error, 'Join League'));
    }
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
        <$JoinLeagueWrapper>
          <div>
            <TextField
              placeholder="Enter your league code"
              onChange={setLeagueHash}
            />
            <Button
              btnText="Enter League"
              btnColor="primary"
              customBtnClass="medium"
              btnFunction={handleJoinLeague}
            />
          </div>
          <$JoinLeagueImg src="/assets/background/vegito.png" alt="Vegito" />
        </$JoinLeagueWrapper>
      </$GlobalContainer>
    </>
  );
};

export default JoinLeague;
