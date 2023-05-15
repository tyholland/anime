import React, { useEffect, useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import { createLeague } from 'src/requests/league';
import { $LeagueCreateWrapper } from './create.style';
import BackLink from 'Components/back-link';
import Select from 'Components/select';
import { useRouter } from 'next/router';
import Metadata from 'Components/metadata';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import ErrorMsg from 'Components/error-msg';
import { useAppContext } from 'src/hooks/context';
import Loader from 'Components/loader';
import ReadMore from 'Components/read-more';

const LeagueCreate = () => {
  const { currentUser } = useAppContext();
  const [teams, setTeams] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const options = ['6', '8', '10'];
  const router = useRouter();

  const handleTeamSelect = (val) => {
    setTeams(val);
  };

  const handleLeagueName = (val) => {
    setLeagueName(val);
  };

  const handleLeagueCreation = async () => {
    setIsDisabled(true);
    setIsLoading(true);

    const payload = {
      name: leagueName,
      numTeams: teams,
    };

    try {
      const { leagueId } = await createLeague(payload, currentUser?.token);

      addEvent('League Created', {
        name: leagueName,
        userId: currentUser?.user_id
      });

      router.push(`/league?league_id=${leagueId}`);
    } catch (err) {
      addEvent('Error', responseError(err, 'Create League'));
      const nonUserMsg = 'Please login, in order to create a league.';
      err.response.status === 401
        ? setErrorMsg(nonUserMsg)
        : setErrorMsg(err.response.data.message);
      setIsDisabled(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    setIsDisabled(!teams.length || !leagueName.length);
  }, [teams, leagueName]);

  return (
    <>
      <Metadata
        title="Create a League"
        description="Anyone can create a new league and invite friends to join it"
      />
      <BackLink />
      <$GlobalContainer>
        <$LeagueCreateWrapper>
          <$GlobalTitle>Create a League</$GlobalTitle>
          {errorMsg && <ErrorMsg msg={errorMsg} />}
          <TextField placeholder="League Name" onChange={handleLeagueName} />
          <Select
            defaultVal="Number of Teams"
            onChange={handleTeamSelect}
            options={options}
          />
          <Button
            btnText={isLoading ? <Loader isSmall={true} /> : 'Create League'}
            btnColor="primary"
            customBtnClass="medium"
            btnFunction={handleLeagueCreation}
            isDisabled={isDisabled}
            disabledMsg="Please complete all the fields above in order to proceed"
          />
        </$LeagueCreateWrapper>
      </$GlobalContainer>
      <ReadMore />
    </>
  );
};

export default LeagueCreate;
