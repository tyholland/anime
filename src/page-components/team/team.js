import React, { useEffect, useState } from 'react';
import * as Styles from './team.style.js';
import * as GlobalStyles from 'Styles/global.style';
import Button from 'Components/button/button.js';
import TeamCard from 'Components/team-card/team-card.js';
import BackLink from 'Components/back-link/back-link.js';
import Metadata from 'Components/metadata/metadata.js';
import { useRouter } from 'next/router.js';
import Error from 'PageComponents/error/error.js';
import { deleteCachedData, responseError } from 'Utils/index.js';
import { getTeam, hideRecap } from 'src/requests/team.js';
import Loader from 'Components/loader/loader.js';
import { addEvent } from 'Utils/amplitude.js';
import { useUserContext } from 'src/hooks/user.js';
import NotUser from 'Components/not-user/not-user.js';
import ReadMore from 'Components/read-more/read-more.js';
import Recap from 'src/modals/recap/recap.js';
import BenchCard from 'Components/bench-card/bench-card.js';
import { useTeamContext } from 'src/hooks/team.js';

const Team = () => {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const { updateTeamData, updateInfoData, updateRecapData, allInfoData, allRecapData, allTeamData } = useTeamContext();
  const [teamId, setTeamId] = useState(null);
  const [teamData, setTeamData] = useState(null);
  const [rank, setRank] = useState(null);
  const [isPastWeek, setIsPastWeek] = useState(null);
  const [hideWeek, setHideWeek] = useState(null);
  const [totalPoints, setTotalPoints] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [account, setAccount] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [recap, setRecap] = useState(null);
  const [leagueId, setLeagueId] = useState(null);
  const [isDisabledRosterEdit, setIsDisabledRosterEdit] = useState(false);
  const [benchSize, setBenchSize] = useState(0);

  const handleTeamSetup = (teamData, team_id) => {
    const { team, info, recap } = teamData;

    const totalPoints =
      team.captain.teamPoints +
      team.brawler_a.teamPoints +
      team.brawler_b.teamPoints +
      team.bs_brawler.teamPoints +
      team.bs_support.teamPoints +
      team.support.teamPoints +
      team.villain.teamPoints +
      team.battlefield.teamPoints;

    setTeamId(team_id);
    setRank(info.rank);
    setIsPastWeek(team.week < info.leagueWeek);
    setTotalPoints(totalPoints || 0);
    setTeamData(teamData);
    setHideWeek(team.week < 1);
    setModalIsOpen(!!recap);
    setRecap(recap);
    setLeagueId(info.league_id);
    setIsDisabledRosterEdit(info.is_roster_active === 0 || info.draft_complete === 0 || info.active === 0);
    setBenchSize(info.benchSize);
  };

  const handleTeam = async () => {
    const { team_id } = router.query;

    if (allTeamData) {
      const teamInfo = {
        team: allTeamData,
        info: allInfoData,
        recap: allRecapData
      };
      
      handleTeamSetup(teamInfo, team_id);
      return;
    }

    try {
      const teamData = await getTeam(team_id, currentUser?.token);
      const { team, info, recap } = teamData;

      handleTeamSetup(teamData, team_id);
      updateTeamData(team);
      updateInfoData(info);
      if (recap) {
        updateRecapData(recap);
      }
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get team data'));
      setErrorPage(true);
    }
  };

  const closeModal = async () => {
    try {
      await hideRecap(leagueId, currentUser?.token);
      deleteCachedData('aflTeam.recap');
      setModalIsOpen(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to close modal'));
    }
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!account) {
      handleTeam();
    }
  }, [router.query, account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Team page"
        description="Page for each individual team. You can update/edit the roster. Edit your lineup for the week. As well as edit/view team info."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <BackLink />
          <GlobalStyles.GlobalContainer>
            {!teamData && <Loader />}
            {teamData && (
              <>
                <Styles.TeamInfo>
                  <Styles.TeamContent>
                    <Styles.TeamName>{teamData.teamName}</Styles.TeamName>
                    {hideWeek ||
                      (!isPastWeek && (
                        <Styles.TeamLeague>Week: {teamData.team.week}</Styles.TeamLeague>
                      ))}
                    <Styles.TeamLeague>
                      Rank: {`${rank.win}-${rank.loss}`}
                    </Styles.TeamLeague>
                  </Styles.TeamContent>
                  {!isPastWeek && (
                    <Styles.TeamBtnSection>
                      <Button
                        btnText="Team Info"
                        btnColor="primary"
                        redirect={`/team/info?member_id=${teamData.memberId}`}
                        customBtnClass="medium"
                      />
                      <Button
                        btnText="Edit Roster"
                        btnColor="primary"
                        customBtnClass="medium"
                        isDisabled={isDisabledRosterEdit}
                        redirect={`/team/edit?team_id=${teamId}`}
                        disabledMsg={'You can\'t edit your roster at this time'}
                      />
                    </Styles.TeamBtnSection>
                  )}
                </Styles.TeamInfo>
                <TeamCard data={teamData.team} />
                <Styles.TeamTotal>
                  <Styles.TeamTotalText>Total</Styles.TeamTotalText>
                  <Styles.TeamTotalAmount>{totalPoints}</Styles.TeamTotalAmount>
                </Styles.TeamTotal>
                <BenchCard data={teamData.team} size={benchSize} />
                <Recap
                  data={recap}
                  modalIsOpen={modalIsOpen}
                  closeModal={closeModal}
                  teamName={teamData.teamName}
                />
              </>
            )}
          </GlobalStyles.GlobalContainer>
          <ReadMore />
        </>
      )}
    </>
  );
};

export default Team;
