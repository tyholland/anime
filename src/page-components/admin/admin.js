import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import Metadata from 'Components/metadata/metadata';
import Button from 'Components/button/button';
import { useAppContext } from 'src/hooks/context';
import Error from 'PageComponents/error/error';
import TextField from 'Components/text-field/text-field';
import * as Styles from './admin.style';
import Select from 'Components/select/select';
import SocialMedia from 'Components/social-media/social-media';
import {
  deleteLeague,
  getLeagueAdminData,
  removeTeamFromLeague,
  updateLeague,
} from 'src/requests/league';
import { responseError } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import ErrorMsg from 'Components/error-msg/error-msg';
import BackLink from 'Components/back-link/back-link';
import Loader from 'Components/loader/loader';
import { useRouter } from 'next/router';
import NotUser from 'Components/not-user/not-user';
import ReadMore from 'Components/read-more/read-more';
import { createDraft } from 'src/requests/draft';
import Notification from 'src/modals/notification/notification';

const Admin = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [errorPage, setErrorPage] = useState(false);
  const [notLoggedIn, setNotLoggedIn] = useState(false);
  const [editNum, setEditNum] = useState(false);
  const [editBench, setEditBench] = useState(false);
  const [editLeague, setEditLeague] = useState(false);
  const [leagueName, setLeagueName] = useState(null);
  const [teamNum, setTeamNum] = useState(null);
  const [benchNum, setBenchNum] = useState(null);
  const [teamNames, setTeamNames] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [league, setLeague] = useState(null);
  const [missingTeams, setMissingTeams] = useState([]);
  const [isLeagueDisabled, setIsLeagueDisabled] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [draftNotify, setDraftNotify] = useState(false);
  const teamOptions = ['6', '8', '10'];
  const benchOptions = ['0', '2', '3', '4'];
  let origin = '';
  const message =
    'Water is a dynamic and versatile element that many heroes and villains in the game can wield to great effect. However, its weakness lies in electricity, making users who master water vulnerable to attacks by electric-based characters. Water is a force to be reckoned with in battles, possessing the ability to adapt to various situations and environments. While they may need to be cautious of electric-based opponents, water users will never shy away from any opponent, as they can just wash them away with a flood.';

  if (typeof window !== 'undefined') {
    origin = window.location.origin;
  }

  const handleNumTeams = async (val) => {
    const payload = {
      name: leagueName,
      teams: val,
      isActive: 1,
    };

    try {
      await updateLeague(league.id, payload, currentUser?.token);
      setTeamNum(val);

      const missingTeams = [];
      const isActiveLeague = teamNames.length === parseInt(val);

      if (teamNames.length < val) {
        const remainingTeams = val - teamNames.length;

        for (let index = 0; index < remainingTeams; index++) {
          missingTeams.push(index);
        }
      }

      setIsLeagueDisabled(!isActiveLeague);
      setMissingTeams(missingTeams);
      setEditNum(false);
    } catch (err) {
      addEvent(
        'Error',
        responseError(err, 'Failed to update league number of teams')
      );
    }
  };

  const handleNumBench = async (val) => {
    const payload = {
      name: leagueName,
      bench: val,
      isActive: 1,
    };

    try {
      await updateLeague(league.id, payload, currentUser?.token);
      setBenchNum(val);
      setEditBench(false);
    } catch (err) {
      addEvent(
        'Error',
        responseError(err, 'Failed to update league bench size')
      );
    }
  };

  const handleLeagueName = async () => {
    setErrorMsg(null);

    const payload = {
      name: leagueName,
      teams: teamNum,
      isActive: 1,
    };

    try {
      await updateLeague(league.id, payload, currentUser?.token);
      setEditLeague(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to update league name'));
      setErrorMsg(err.response.data.message);
      setEditLeague(true);
    }
  };

  const handleCreateDraft = async () => {
    try {
      await createDraft(league.id, currentUser?.token);
      setIsStarted(true);
      setDraftNotify(true);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to create draft'));
    }
  };

  const handleDeleteLeague = async () => {
    setErrorMsg(null);

    try {
      await deleteLeague(league.id, currentUser?.token);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to delete league'));
      setErrorMsg(err.response.data.message);
    }
  };

  const handleRemoveTeam = async (memberId) => {
    setErrorMsg(null);

    const payload = {
      leagueId: league.id,
    };

    try {
      const { teams } = await removeTeamFromLeague(
        memberId,
        payload,
        currentUser?.token
      );

      setTeamNames(teams);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to remove team'));
      setErrorMsg(err.response.data.message);
    }
  };

  const handleLeagueAdmin = async () => {
    const { league_id } = router.query;

    try {
      const leagueData = await getLeagueAdminData(
        league_id,
        currentUser?.token
      );
      const { league, teams } = leagueData;
      const { num_teams, name, num_bench } = league;
      const isActiveLeague = teams.length === num_teams;
      const missingTeams = [];

      if (teams.length < num_teams) {
        const remainingTeams = num_teams - teams.length;

        for (let index = 0; index < remainingTeams; index++) {
          missingTeams.push(index);
        }
      }

      setTeamNames(teams);
      setLeague(league);
      setTeamNum(num_teams);
      setLeagueName(name);
      setMissingTeams(missingTeams);
      setIsLeagueDisabled(!isActiveLeague);
      setIsStarted(leagueData.hasDraft);
      setBenchNum(num_bench);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to league admin data'));
      setErrorPage(true);
    }
  };

  const closeModal = () => {
    setDraftNotify(false);
  };

  const basicUp = (
    <div className="collapseContainer">
      <div>Basic</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const basicDown = (
    <div className="collapseContainer">
      <div>Basic</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const teamUp = (
    <div className="collapseContainer">
      <div>Teams</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const teamDown = (
    <div className="collapseContainer">
      <div>Teams</div>
      <div className="down">&#10132;</div>
    </div>
  );

  useEffect(() => {
    setNotLoggedIn(!currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!currentUser) {
      handleLeagueAdmin();
    }
  }, [router.query, currentUser]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <GlobalStyles.CollapsibleStyles />
      <Metadata
        title="Admin Settings"
        description="League Admin settings. You can change the number of teams in the league or the league name."
      />
      {notLoggedIn && <NotUser message={message} />}
      {!notLoggedIn && (
        <>
          <BackLink />
          <GlobalStyles.GlobalContainer>
            <GlobalStyles.GlobalTitle>Admin Settings</GlobalStyles.GlobalTitle>
            {errorMsg && <ErrorMsg msg={errorMsg} />}
            {!league && <Loader />}
            {league && (
              <>
                <Styles.AdminContainer>
                  <Collapsible trigger={basicDown} triggerTagName="div" triggerWhenOpen={basicUp} triggerElementProps={{ id: 'basic', 'aria-controls': 'basic' }} contentElementId="basic">
                    <Styles.AdminWrapper>
                      <Styles.AdminSection>
                        {editNum && (
                          <>
                            <Select
                              defaultVal="Number of Teams"
                              onChange={handleNumTeams}
                              options={teamOptions}
                            />
                            <Button
                              btnText="Cancel"
                              btnFunction={() => setEditNum(false)}
                              customBtnClass="text edit"
                            />
                          </>
                        )}
                        {!editNum && (
                          <>
                            <div>Number of Teams: {teamNum}</div>
                            {!isStarted &&
                              <Button
                                btnText="Edit"
                                btnFunction={() => setEditNum(true)}
                                customBtnClass="small text edit"
                              />
                            }
                          </>
                        )}
                      </Styles.AdminSection>
                      <Styles.AdminSection>
                        {editBench && (
                          <>
                            <Select
                              defaultVal="Bench Size"
                              onChange={handleNumBench}
                              options={benchOptions}
                            />
                            <Button
                              btnText="Cancel"
                              btnFunction={() => setEditBench(false)}
                              customBtnClass="text edit"
                            />
                          </>
                        )}
                        {!editBench && (
                          <>
                            <div>Bench Size: {benchNum}</div>
                            {!isStarted &&
                              <Button
                                btnText="Edit"
                                btnFunction={() => setEditBench(true)}
                                customBtnClass="small text edit"
                              />
                            }
                          </>
                        )}
                      </Styles.AdminSection>
                      <Styles.AdminSection>
                        {editLeague && (
                          <>
                            <TextField
                              placeholder="League Name"
                              onChange={setLeagueName}
                              inputVal={leagueName}
                            />
                            <Button
                              btnText="Save"
                              btnFunction={handleLeagueName}
                              customBtnClass="text edit"
                            />
                            <Button
                              btnText="Cancel"
                              btnFunction={() => {
                                setEditLeague(false);
                                setErrorMsg(null);
                                setLeagueName(leagueName);
                              }}
                              customBtnClass="text edit"
                            />
                          </>
                        )}
                        {!editLeague && (
                          <>
                            <div>League Name: {leagueName}</div>
                            <Button
                              btnText="Edit"
                              btnFunction={() => setEditLeague(true)}
                              customBtnClass="text edit"
                            />
                          </>
                        )}
                      </Styles.AdminSection>
                      <Styles.AdminSection className="start">
                        <Button
                          btnText="Create Draft"
                          btnFunction={handleCreateDraft}
                          btnColor="primary"
                          isDisabled={isStarted || isLeagueDisabled}
                          customBtnClass="medium"
                          disabledMsg={isStarted ? 'League has already started' : isLeagueDisabled ? 'You don\'t have enough teams to draft' : null}
                        />
                        <div className="content">Your League doesn't officially start until the Monday after you complete your League Draft.</div>
                      </Styles.AdminSection>
                      {!isStarted &&
                      <Styles.AdminSection className="delete">
                        <Button
                          btnText="Delete League"
                          btnFunction={handleDeleteLeague}
                          customBtnClass="text"
                        />
                      </Styles.AdminSection>
                      }
                    </Styles.AdminWrapper>
                  </Collapsible>
                  <Collapsible trigger={teamDown} triggerTagName="div" triggerWhenOpen={teamUp} triggerElementProps={{ id: 'team', 'aria-controls': 'team' }} contentElementId="team">
                    <Styles.AdminWrapper className="column">
                      <ol>
                        {teamNames.map((team) => {
                          return (
                            <li key={team.id} className="team">
                              {team.team_name}
                              {league.week === -1 && (
                                <Button
                                  btnText="Remove"
                                  btnFunction={() => handleRemoveTeam(team.id)}
                                  customBtnClass="text edit"
                                />
                              )}
                            </li>
                          );
                        })}
                        {missingTeams?.map((index) => {
                          return <li key={index}></li>;
                        })}
                      </ol>
                      {teamNames.length !== parseInt(teamNum) && (
                        <SocialMedia
                          pageTitle="Invite friends to Join League"
                          title={`Join my Anime Fantasy League. League code: ${league.hash}`}
                          description="Build your ultimate anime team"
                          singleHashtag="#animeFantasyLeague"
                          pluralHashtags={[
                            'afl',
                            'aflFantasyLeague',
                            'animeFantasyLeague',
                          ]}
                          url={`${origin}/league/join?id=${league.hash}`}
                        />
                      )}
                    </Styles.AdminWrapper>
                  </Collapsible>
                </Styles.AdminContainer>
                <Notification
                  message="Your Draft is now avilable. Go to the League page in order to see the Draft button. Your League won't officially start until the Monday after you finish your League Draft."
                  modalIsOpen={draftNotify}
                  closeModal={closeModal}
                />
              </>
            )}
          </GlobalStyles.GlobalContainer>
          <ReadMore>{message}</ReadMore>
        </>
      )}
    </>
  );
};

export default Admin;
