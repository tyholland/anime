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
import Error from 'PageComponents/error';

const LeagueCreate = () => {
  const [teams, setTeams] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const options = ['6', '7', '8', '9', '10'];
  const router = useRouter();
  const cookie = getCookie('token');

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
      const { leagueId } = await createLeague(payload, getCookie('token'));

      addEvent('League Created', {
        name: leagueName,
      });

      router.push(`/league/${leagueId}`);
    } catch (err) {
      addEvent('Error', responseError(err, 'Create League'));
      setIsDisabled(true);
    }
  };

  useEffect(() => {
    setIsDisabled(!teams.length || !leagueName.length);
  }, [teams, leagueName]);

  if (!cookie) {
    return <Error />;
  }

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
