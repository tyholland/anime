import React, { useEffect, useState } from 'react';
import Button from 'Components/button/button';
import TextField from 'Components/text-field/text-field';
import BackLink from 'Components/back-link/back-link';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './join.style';
import Metadata from 'Components/metadata/metadata';
import { joinLeague } from 'Requests/league';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { useRouter } from 'next/router';
import ErrorMsg from 'Components/error-msg/error-msg';
import { useUserContext } from 'Hooks/user';
import Loader from 'Components/loader/loader';
import ReadMore from 'Components/read-more/read-more';

const JoinLeague = () => {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const [leagueHash, setLeagueHash] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { id } = router.query;

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
        userId: currentUser?.user_id,
      });

      router.push(`/league?league_id=${leagueId}`);
    } catch (error) {
      error.response?.status === 401
        ? router.push(`/login?join=${leagueHash}`)
        : setErrorMsg(error.response.data.message);

      addEvent('Error', responseError(error, 'Join League'));
      setIsDisabled(true);
      setIsLoading(false);
    }
  };

  const handleLeagueHash = (val: string) => {
    setIsDisabled(false);
    setLeagueHash(val);
  };

  const handleKeyboardSubmit = async (e: Record<string, any>) => {
    if (e.key === 'Enter' && !isDisabled) {
      await handleJoinLeague();
    }
  };

  useEffect(() => {
    if (id) {
      handleLeagueHash(id as string);
    }
  }, [id]);

  return (
    <>
      <Metadata
        title="Join a League"
        description="Join an AFL League and see if you can create the ultimate team and win the league"
      />
      <BackLink />
      <GlobalStyles.GlobalContainer>
        <GlobalStyles.GlobalTitle>Join League</GlobalStyles.GlobalTitle>
        <Styles.JoinLeagueWrapper className={errorMsg && 'spacing'}>
          <div>
            <TextField
              placeholder="Enter your league code"
              onChange={handleLeagueHash}
              maxLength={11}
              onKeyDown={handleKeyboardSubmit}
              inputVal={id ? (id as string) : null}
            />
            <Button
              btnText={isLoading ? <Loader isSmall={true} /> : 'Enter League'}
              btnColor="primary"
              customBtnClass="medium"
              btnFunction={handleJoinLeague}
              isDisabled={isDisabled}
              disabledMsg="Please complete all the fields above in order to proceed"
            />
            {errorMsg && <ErrorMsg msg={errorMsg} />}
          </div>
          <Styles.JoinLeagueImg
            src="/assets/background/vegito.webp"
            alt="Vegito"
          />
        </Styles.JoinLeagueWrapper>
      </GlobalStyles.GlobalContainer>
      <ReadMore>
        Affinity Tip: Electricity is an explosive elemental force that can be
        wielded by both heroes and villains in the game. Its weakness lies in
        earth, which can ground and nullify its electrical energy. Despite this
        vulnerability, electricity users are still a formidable force in
        battles. They are known for their agility and speed, as well as their
        ability to stun and disrupt opponents with shocking attacks. Electricity
        users can harness their powers to create devastating electrical storms
        and blasts. As long as they are careful to avoid earth-based opponents,
        electricity users can easily zap away the competition.
      </ReadMore>
    </>
  );
};

export default JoinLeague;
