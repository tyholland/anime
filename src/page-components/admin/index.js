import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import { $GameplayStyles } from 'PageComponents/gameplay/gameplay.style';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { useAppContext } from 'src/hooks/context';
import Error from 'PageComponents/error';
import TextField from 'Components/text-field';
import { $AdminWrapper, $AdminSection } from './admin.style';
import Select from 'Components/select';
import SocialMedia from 'Components/social-media';
import {
  deleteLeague,
  getLeagueAdminData,
  removeTeamFromLeague,
  updateLeague,
} from 'src/requests/league';
import { getCookie, responseError } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import ErrorMsg from 'Components/error-msg';
import BackLink from 'Components/back-link';
import Loader from 'Components/loader';

const Admin = () => {
  const { currentUser } = useAppContext();
  const [errorPage, setErrorPage] = useState(false);
  const [editNum, setEditNum] = useState(false);
  const [editLeague, setEditLeague] = useState(false);
  const [leagueName, setLeagueName] = useState(null);
  const [teamNum, setTeamNum] = useState(null);
  const [teamNames, setTeamNames] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [league, setLeague] = useState(null);
  const [missingTeams, setMissingTeams] = useState([]);
  const options = ['6', '7', '8', '9', '10'];
  let origin = '';

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
      await updateLeague(league.id, payload, getCookie('token'));
      setTeamNum(val);
      setEditNum(false);
    } catch (err) {
      addEvent(
        'Error',
        responseError(err, 'failed to update league number of teams')
      );
    }
  };

  const handleLeagueName = async () => {
    const payload = {
      name: leagueName,
      teams: teamNum,
      isActive: 1,
    };

    try {
      await updateLeague(league.id, payload, getCookie('token'));
      setEditLeague(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'failed to update league name'));
    }
  };

  const handleDeleteLeague = async () => {
    setErrorMsg(null);

    try {
      await deleteLeague(league.id, getCookie('token'));
    } catch (err) {
      addEvent('Error', responseError(err, 'failed to delete league'));
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
        getCookie('token')
      );

      setTeamNames(teams);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to remove team'));
      setErrorMsg(err.response.data.message);
    }
  };

  const handleLeagueAdmin = async () => {
    try {
      const leagueData = await getLeagueAdminData(getCookie('token'));
      const { league, teams } = leagueData;
      const { num_teams, name } = league;
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
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to league admin data'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    setErrorPage(!currentUser);
  }, [currentUser]);

  useEffect(() => {
    handleLeagueAdmin();
  }, []);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <BackLink />
      <$GameplayStyles />
      <Metadata
        title="Admin Settings"
        description="League Admin settings. You can change the number of teams in the league or the league name."
      />
      <$GlobalContainer>
        <$GlobalTitle>Admin Settings</$GlobalTitle>
        {errorMsg && <ErrorMsg msg={errorMsg} />}
        {!league && <Loader />}
        {league && (
          <>
            <Collapsible trigger="Basic" triggerTagName="div">
              <$AdminWrapper>
                <$AdminSection>
                  {editNum && (
                    <>
                      <Select
                        defaultVal="Number of Teams"
                        onChange={handleNumTeams}
                        options={options}
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
                      <Button
                        btnText="Edit"
                        btnFunction={() => setEditNum(true)}
                        customBtnClass="small text edit"
                      />
                    </>
                  )}
                </$AdminSection>
                <$AdminSection>
                  {editLeague && (
                    <>
                      <TextField
                        placeholder="League Name"
                        onChange={setLeagueName}
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
                </$AdminSection>
                <$AdminSection className="delete">
                  <Button
                    btnText="Delete League"
                    btnFunction={handleDeleteLeague}
                    customBtnClass="text"
                  />
                </$AdminSection>
              </$AdminWrapper>
            </Collapsible>
            <Collapsible trigger="Teams" triggerTagName="div">
              <$AdminWrapper className="column">
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
                {teamNames.length !== teamNum && (
                  <SocialMedia
                    pageTitle="Invite friends to Join League"
                    title={`Join my ABZ Fantasy League. League code: ${league.hash}`}
                    description="Build your ultimate anime team"
                    singleHashtag="#abzFantasyLeague"
                    pluralHashtags={['abz', 'abzFantasyLeague', 'animebrothaz']}
                    url={`${origin}/league/join`}
                  />
                )}
              </$AdminWrapper>
            </Collapsible>
          </>
        )}
      </$GlobalContainer>
    </>
  );
};

export default Admin;
