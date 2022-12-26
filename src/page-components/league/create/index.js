import React, { useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import { createLeague } from 'src/requests/league';
import { $LeagueCreateWrapper } from './create.style';
import BackLink from 'Components/back-link';
import Select from 'Components/select';

const LeagueCreate = () => {
  const [teams, setTeams] = useState(6);
  const [leagueName, setLeagueName] = useState(null);
  const options = ['6', '7', '8', '9', '10'];

  const handleTeamSelect = (e) => {
    const val = e.target.value;

    setTeams(val);
  };

  const handleLeagueCreation = async () => {
    const payload = {
      name: leagueName,
      numTeams: teams,
      userId: 1,
    };

    await createLeague(payload);
  };

  return (
    <>
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
          />
        </$LeagueCreateWrapper>
      </$GlobalContainer>
    </>
  );
};

export default LeagueCreate;
