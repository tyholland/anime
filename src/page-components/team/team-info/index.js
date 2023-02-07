import React, { useState } from 'react';
import {
  $TeamInfoContent,
  $TeamInfoTitle,
  $TeamInfoBtn,
  $TeamInfoStats,
  $TeamInfoWrapper,
} from './teamInfo.style.js';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import BackLink from 'Components/back-link/index.js';
import { removeTeam, updateTeamName } from 'src/requests/team.js';
import { addEvent } from 'Utils/amplitude.js';
import Metadata from 'Components/metadata/index.js';
import { getCookie, responseError } from 'Utils/index.js';
import ErrorMsg from 'Components/error-msg/index.js';
import { useRouter } from 'next/router.js';

const TeamInfo = ({ teamData }) => {
  const router = useRouter();
  const { team_name, name, points, id, rank, league_id } = teamData;
  const [edit, setEdit] = useState(false);
  const [teamName, setTeamName] = useState(team_name);
  const [changedName, setChangedName] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);

  const handleTeamNameChange = async () => {
    setErrorMsg(null);

    try {
      await updateTeamName(
        id,
        {
          name: changedName,
        },
        getCookie('token')
      );

      addEvent('Change Team Name', {
        previous: team_name,
        new: changedName,
      });

      setTeamName(changedName);
      setEdit(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Change Team Name'));
      setErrorMsg(err.response.data.message);
      setEdit(true);
    }
  };

  const handleRemoveTeam = async () => {
    setErrorMsg(null);

    try {
      await removeTeam(league_id, getCookie('token'));

      router.push('/league');
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to remove team'));
      setErrorMsg(err.response.data.message);
    }
  };

  return (
    <>
      <BackLink />
      <Metadata
        title="Team Info"
        desciption="Information about your specific team. The team rank, the league your team is in, your reminaing points. Lastly you can update your team name."
      />
      <$GlobalContainer>
        <$GlobalTitle>Team Info</$GlobalTitle>
        {errorMsg && <ErrorMsg msg={errorMsg} />}
        <$TeamInfoWrapper>
          <div>
            <$TeamInfoTitle>Team Name:</$TeamInfoTitle>
            {edit && (
              <TextField
                placeholder="Enter Team Name"
                onChange={setChangedName}
              />
            )}
            {!edit && <$TeamInfoContent>{teamName}</$TeamInfoContent>}
            <$TeamInfoBtn>
              <Button
                btnText={edit ? 'Save' : 'Edit'}
                btnColor="primary"
                btnFunction={() => {
                  if (edit) {
                    handleTeamNameChange();
                    return;
                  }
                  setEdit(true);
                }}
                customBtnClass="medium"
              />
              {edit && (
                <Button
                  btnText="Cancel"
                  btnColor="cancel"
                  btnFunction={() => {
                    setEdit(false);
                    setErrorMsg(null);
                  }}
                  customBtnClass="medium"
                />
              )}
            </$TeamInfoBtn>
          </div>
          <div>
            <$TeamInfoStats>
              <span>League:</span> {name}
            </$TeamInfoStats>
            <$TeamInfoStats>
              <span>Record:</span> {`${rank.win}-${rank.loss}`}
            </$TeamInfoStats>
            <$TeamInfoStats>
              <span>Points Remaining:</span> {points} pts
            </$TeamInfoStats>
            <$TeamInfoStats>
              <Button
                btnText="Remove team"
                btnFunction={handleRemoveTeam}
                customBtnClass="text"
              />
            </$TeamInfoStats>
          </div>
        </$TeamInfoWrapper>
      </$GlobalContainer>
    </>
  );
};

export default TeamInfo;
