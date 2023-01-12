import React, { useEffect, useState } from 'react';
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
import { getTeamInfo, updateTeamName } from 'src/requests/team.js';
import { addEvent } from 'Utils/amplitude.js';
import Metadata from 'Components/metadata/index.js';
import { responseError } from 'Utils/index.js';
import Loader from 'Components/loader/index.js';
import Error from 'PageComponents/error';

const TeamInfo = ({ memberId }) => {
  const [edit, setEdit] = useState(false);
  const [teamName, setTeamName] = useState(null);
  const [changedName, setChangedName] = useState('');
  const [data, setData] = useState(null);
  const [errorPage, setErrorPage] = useState(false);

  const handleTeamNameChange = async () => {
    try {
      await updateTeamName(data.id, {
        name: changedName,
      });

      setTeamName(changedName);
    } catch (err) {
      addEvent('Error', responseError('Change Team Name'));
    }
  };

  const getTeamData = async () => {
    setErrorPage(false);
    try {
      const teamData = await getTeamInfo(memberId);
      setData(teamData[0]);
      setTeamName(teamData[0].team_name);
    } catch (err) {
      addEvent('Error', responseError('Get team data for info page'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    if (!data) {
      getTeamData();
    }
  }, [data]);

  if (!data && !errorPage) {
    return <Loader />;
  }

  if (errorPage && !data) {
    return <Error />;
  }

  return (
    <>
      <BackLink />
      <Metadata
        title="Team Info"
        desciption="Information about your specific team. The team rank, the league your team is in, your reminaing points. Lastly you can update your team name."
      />
      <$GlobalContainer>
        <$GlobalTitle>Team Info</$GlobalTitle>
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
                  handleTeamNameChange();
                  setEdit(!edit);
                }}
                customBtnClass="medium"
              />
              {edit && (
                <Button
                  btnText="Cancel"
                  btnColor="cancel"
                  btnFunction={() => setEdit(false)}
                  customBtnClass="medium"
                />
              )}
            </$TeamInfoBtn>
          </div>
          <div>
            <$TeamInfoStats>
              <span>League:</span> {data.name}
            </$TeamInfoStats>
            <$TeamInfoStats>
              <span>Record:</span> 0-0
            </$TeamInfoStats>
            <$TeamInfoStats>
              <span>Points Remaining:</span> {data.points} pts
            </$TeamInfoStats>
          </div>
        </$TeamInfoWrapper>
      </$GlobalContainer>
    </>
  );
};

export default TeamInfo;
