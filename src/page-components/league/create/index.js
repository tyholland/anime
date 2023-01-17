import React, { useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import { createLeague } from 'src/requests/league';
import { $LeagueCreateWrapper } from './create.style';
import BackLink from 'Components/back-link';
import Select from 'Components/select';
import { useAppContext } from 'src/hooks/context';
import { useRouter } from 'next/router';
import Metadata from 'Components/metadata';
import { addEvent } from 'Utils/amplitude';
import { getCookie, responseError } from 'Utils/index';

const LeagueCreate = () => {
  const { currentUser } = useAppContext();
  const [teams, setTeams] = useState('');
  const [leagueName, setLeagueName] = useState('');
  const options = ['6', '7', '8', '9', '10'];
  const isDisabled = !teams.length || !leagueName.length;
  const router = useRouter();

  const handleTeamSelect = (val) => {
    setTeams(val);
  };

  const handleLeagueCreation = async () => {
    const payload = {
      name: leagueName,
      numTeams: teams,
      userId: currentUser.user_id,
    };

    try {
      const { teamId, leagueId } = await createLeague(
        payload,
        getCookie('token')
      );

      router.push(`/team/${leagueId}/${teamId}`);
    } catch (err) {
      addEvent('Error', responseError(err, 'Create League'));
    }
  };

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
          <TextField placeholder="League Name" onChange={setLeagueName} />
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
