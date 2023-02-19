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
import { getTeamInfo, removeTeam, updateTeamName } from 'src/requests/team.js';
import { addEvent } from 'Utils/amplitude.js';
import Metadata from 'Components/metadata/index.js';
import { getCookie, responseError } from 'Utils/index.js';
import ErrorMsg from 'Components/error-msg/index.js';
import { useRouter } from 'next/router.js';
import Loader from 'Components/loader/index.js';
import Error from 'PageComponents/error/index.js';

const TeamInfo = () => {
  const router = useRouter();
  const [edit, setEdit] = useState(false);
  const [teamData, setTeamData] = useState(null);
  const [teamName, setTeamName] = useState(null);
  const [changedName, setChangedName] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorPage, setErrorPage] = useState(false);

  const handleTeamNameChange = async () => {
    setErrorMsg(null);

    try {
      await updateTeamName(
        teamData.id,
        {
          name: changedName,
        },
        getCookie('__session')
      );

      addEvent('Change Team Name', {
        previous: teamName,
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
      await removeTeam(teamData.league_id, getCookie('__session'));

      router.push('/league');
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to remove team'));
      setErrorMsg(err.response.data.message);
    }
  };

  const handleTeamInfo = async () => {
    const { member_id } = router.query;

    try {
      const teamData = await getTeamInfo(member_id, getCookie('__session'));
      const { team_name } = teamData;

      setTeamName(team_name);
      setTeamData(teamData);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get team info data'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length) {
      handleTeamInfo();
    }
  }, [router.query]);

  if (errorPage) {
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
        {errorMsg && <ErrorMsg msg={errorMsg} />}
        {!teamData && <Loader />}
        {teamData && (
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
                <span>League:</span> {teamData.name}
              </$TeamInfoStats>
              <$TeamInfoStats>
                <span>Record:</span>{' '}
                {`${teamData.rank.win}-${teamData.rank.loss}`}
              </$TeamInfoStats>
              <$TeamInfoStats>
                <span>Points Remaining:</span> {teamData.points} pts
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
        )}
      </$GlobalContainer>
    </>
  );
};

export default TeamInfo;
