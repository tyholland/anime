import React, { useEffect, useState } from 'react';
import { $TeamInfoStats, $TeamInfoWrapper } from './teamInfo.style.js';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style.js';
import Button from 'Components/button';
import TextField from 'Components/text-field';
import BackLink from 'Components/back-link/index.js';
import { getTeamInfo, removeTeam, updateTeamName } from 'src/requests/team.js';
import { addEvent } from 'Utils/amplitude.js';
import Metadata from 'Components/metadata/index.js';
import { responseError } from 'Utils/index.js';
import ErrorMsg from 'Components/error-msg/index.js';
import { useRouter } from 'next/router.js';
import Loader from 'Components/loader/index.js';
import Error from 'PageComponents/error/index.js';
import { useAppContext } from 'src/hooks/context.js';
import NotUser from 'Components/not-user/index.js';

const TeamInfo = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [edit, setEdit] = useState(false);
  const [teamData, setTeamData] = useState(null);
  const [teamName, setTeamName] = useState(null);
  const [changedName, setChangedName] = useState('');
  const [errorMsg, setErrorMsg] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [account, setAccount] = useState(null);

  const handleTeamNameChange = async () => {
    setErrorMsg(null);

    try {
      await updateTeamName(
        teamData.id,
        {
          name: changedName,
        },
        currentUser?.token
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
      await removeTeam(teamData.league_id, currentUser?.token);

      router.push('/league');
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to remove team'));
      setErrorMsg(err.response.data.message);
    }
  };

  const handleTeamInfo = async () => {
    const { member_id } = router.query;

    try {
      const teamData = await getTeamInfo(member_id, currentUser?.token);
      const { team_name } = teamData;

      setTeamName(team_name);
      setTeamData(teamData);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get team info data'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(router.query).length && !!account) {
      handleTeamInfo();
    }
  }, [router.query, account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Team Info"
        desciption="Information about your specific team. The team rank, the league your team is in, your reminaing points. Lastly you can update your team name."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <BackLink />
          <$GlobalContainer>
            <$GlobalTitle>Team Info</$GlobalTitle>
            {errorMsg && <ErrorMsg msg={errorMsg} />}
            {!teamData && <Loader />}
            {teamData && (
              <$TeamInfoWrapper>
                <div className="editName">
                  {edit && (
                    <>
                      <TextField
                        placeholder="Enter Team Name"
                        onChange={setChangedName}
                        maxLength={15}
                      />
                      <Button
                        btnText="Save"
                        btnFunction={handleTeamNameChange}
                        customBtnClass="text edit change"
                      />
                      <Button
                        btnText="Cancel"
                        btnFunction={() => {
                          setEdit(false);
                          setErrorMsg(null);
                          setChangedName(teamName);
                        }}
                        customBtnClass="text edit change"
                      />
                    </>
                  )}
                  {!edit && (
                    <>
                      <$TeamInfoStats>
                        <span>Team Name:</span> {teamName}
                      </$TeamInfoStats>
                      <Button
                        btnText="Edit"
                        btnFunction={() => setEdit(true)}
                        customBtnClass="text edit"
                      />
                    </>
                  )}
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
      )}
    </>
  );
};

export default TeamInfo;
