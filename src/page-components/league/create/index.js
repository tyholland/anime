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
import { getCookie, responseError } from 'Utils/index';
import ErrorMsg from 'Components/error-msg';

const LeagueCreate = () => {
  const [teams, setTeams] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const options = ['6', '7', '8', '9', '10'];
  const router = useRouter();

  const handleTeamSelect = (val) => {
    setTeams(val);
  };

  const handleLeagueName = (val) => {
    setLeagueName(val);
  };

  const handleLeagueCreation = async () => {
    setIsDisabled(true);
    const payload = {
      name: leagueName,
      numTeams: teams,
    };

    try {
      const { leagueId } = await createLeague(payload, getCookie('__session'));

      addEvent('League Created', {
        name: leagueName,
      });

      router.push(`/league/${leagueId}`);
    } catch (err) {
      addEvent('Error', responseError(err, 'Create League'));
      const nonUserMsg = 'Please login, in order to create a league.';
      err.response.status === 401
        ? setErrorMsg(nonUserMsg)
        : setErrorMsg(err.response.data.message);
      setIsDisabled(true);
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
            btnText="Create League"
            btnColor="primary"
            customBtnClass="medium"
            btnFunction={handleLeagueCreation}
            isDisabled={isDisabled}
          />
        </$LeagueCreateWrapper>
      </$GlobalContainer>
    </>
  );
};

export default LeagueCreate;
