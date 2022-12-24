import React, { useState } from 'react';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import { createLeague } from 'src/requests/league';
import { $LeagueCreateWrapper } from './create.style';
import BackLink from 'Components/back-link';

const LeagueCreate = () => {
  const [teams, setTeams] = useState(6);
  const [leagueName, setLeagueName] = useState(null);

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
          <label>Number of Teams</label>
          <select onChange={(val) => handleTeamSelect(val)}>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
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
