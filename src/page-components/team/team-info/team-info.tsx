import React, { useEffect, useState } from 'react';
import * as Styles from './teamInfo.style';
import * as GlobalStyles from 'Styles/global.style';
import Button from 'Components/button/button';
import TextField from 'Components/text-field/text-field';
import BackLink from 'Components/back-link/back-link';
import { getTeamInfo, removeTeam, updateTeamName } from 'Requests/team';
import { addEvent } from 'Utils/amplitude';
import Metadata from 'Components/metadata/metadata';
import { responseError } from 'Utils/index';
import ErrorMsg from 'Components/error-msg/error-msg';
import { useRouter } from 'next/router';
import Loader from 'Components/loader/loader';
import Error from 'PageComponents/error/error';
import { useUserContext } from 'Hooks/user';
import NotUser from 'Components/not-user/not-user';
import ReadMore from 'Components/read-more/read-more';

const TeamInfo = () => {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const [edit, setEdit] = useState<boolean>(false);
  const [teamData, setTeamData] = useState<Record<string, any> | null>(null);
  const [teamName, setTeamName] = useState<string | null>(null);
  const [changedName, setChangedName] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const [account, setAccount] = useState<Record<string, any> | null>(null);

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
        userId: currentUser?.user_id,
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
      const teamData = await getTeamInfo(member_id as string, currentUser?.token);
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
    if (Object.keys(router.query).length > 0 && !!account) {
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
        description="Information about your specific team. The team rank, the league your team is in, your reminaing points. Lastly you can update your team name."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <BackLink />
          <GlobalStyles.GlobalContainer>
            <GlobalStyles.GlobalTitle>Team Info</GlobalStyles.GlobalTitle>
            {errorMsg && <ErrorMsg msg={errorMsg} />}
            {!teamData && <Loader />}
            {teamData && (
              <Styles.TeamInfoWrapper>
                <div className="editName">
                  {edit && (
                    <>
                      <TextField
                        placeholder="Enter Team Name"
                        onChange={setChangedName}
                        maxLength={15}
                        inputVal={teamName}
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
                      <Styles.TeamInfoStats>
                        <span>Team Name:</span> {teamName}
                      </Styles.TeamInfoStats>
                      <Button
                        btnText="Edit"
                        btnFunction={() => setEdit(true)}
                        customBtnClass="text edit"
                      />
                    </>
                  )}
                </div>
                <div>
                  <Styles.TeamInfoStats>
                    <span>League:</span> {teamData.name}
                  </Styles.TeamInfoStats>
                  <Styles.TeamInfoStats>
                    <span>Record:</span>{' '}
                    {`${teamData.rank.win}-${teamData.rank.loss}`}
                  </Styles.TeamInfoStats>
                  <Styles.TeamInfoStats>
                    <span>Points Remaining:</span> {teamData.points} pts
                  </Styles.TeamInfoStats>
                  <Styles.TeamInfoStats>
                    <Button
                      btnText="Remove team"
                      btnFunction={handleRemoveTeam}
                      customBtnClass="text"
                    />
                  </Styles.TeamInfoStats>
                </div>
              </Styles.TeamInfoWrapper>
            )}
          </GlobalStyles.GlobalContainer>
          <ReadMore />
        </>
      )}
    </>
  );
};

export default TeamInfo;
