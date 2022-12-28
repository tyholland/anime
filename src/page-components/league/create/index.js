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

const LeagueCreate = () => {
  const { currentUser, updateLeagueDetails } = useAppContext();
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
      userId: currentUser.userId,
    };

    const league = await createLeague(payload);

    updateLeagueDetails(league);

    router.push(`/team/${league.teamId}`);
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
            btnTextColor="black"
            btnColor="orange"
            customBtnClass="medium"
            redirect="/account"
            btnFunction={handleLeagueCreation}
            isDisabled={isDisabled}
          />
        </$LeagueCreateWrapper>
      </$GlobalContainer>
    </>
  );
};

export default LeagueCreate;
