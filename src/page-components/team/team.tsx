import React, { useEffect, useState } from 'react';
import * as Styles from './team.style';
import * as GlobalStyles from 'Styles/global.style';
import Button from 'Components/button/button';
import TeamCard from 'Components/team-card/team-card';
import BackLink from 'Components/back-link/back-link';
import Metadata from 'Components/metadata/metadata';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error/error';
import { responseError } from 'Utils/index';
import { getTeam, hideRecap } from 'Requests/team';
import Loader from 'Components/loader/loader';
import { addEvent } from 'Utils/amplitude';
import { useUserContext } from 'Hooks/user';
import NotUser from 'Components/not-user/not-user';
import ReadMore from 'Components/read-more/read-more';
import Recap from 'Modals/recap/recap';
import BenchCard from 'Components/bench-card/bench-card';
import { useTeamContext } from 'Hooks/team';
import { useLeagueContext } from 'Hooks/league';
import { useStandingsContext } from 'Hooks/standings';

const Team = () => {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const {
    updateTeamData,
    updateInfoData,
    updateRecapData,
    allInfoData,
    allRecapData,
    allTeamData,
    handleTeamRefresh,
    deleteTeamData
  } = useTeamContext();
  const { deleteLeagueData } = useLeagueContext();
  const { deleteCurrentStandings } = useStandingsContext();
  const [teamId, setTeamId] = useState<string | null>(null);
  const [teamData, setTeamData] = useState<Record<string, any> | null>(null);
  const [rank, setRank] = useState<Record<string, any> | null>(null);
  const [isPastWeek, setIsPastWeek] = useState<boolean>(false);
  const [hideWeek, setHideWeek] = useState<boolean>(false);
  const [totalPoints, setTotalPoints] = useState<number>(0);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const [account, setAccount] = useState<Record<string, any> | null>(null);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [recap, setRecap] = useState<Record<string, any> | null>(null);
  const [leagueId, setLeagueId] = useState<number | null>(null);
  const [isDisabledRosterEdit, setIsDisabledRosterEdit] = useState<boolean>(false);
  const [benchSize, setBenchSize] = useState<number>(0);

  const handleTeamSetup = (teamData: Record<string, any>, team_id: string) => {
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
    setIsDisabledRosterEdit(
      info.is_roster_active === 0 ||
        info.draft_complete === 0 ||
        info.active === 0
    );
    setBenchSize(info.benchSize);
  };

  const handleTeam = async () => {
    const { team_id } = router.query;

    if (allTeamData && !handleTeamRefresh) {
      const teamInfo = {
        ...allTeamData,
        info: allInfoData,
        recap: allRecapData,
      };

      handleTeamSetup(teamInfo, team_id as string);
      return;
    }

    try {
      const teamData = await getTeam(team_id as string, currentUser?.token);
      const { info, recap } = teamData;

      handleTeamSetup(teamData, team_id as string);
      updateTeamData(teamData);
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
      deleteTeamData();
      deleteLeagueData();
      deleteCurrentStandings();
      await handleTeam();
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
                        <Styles.TeamLeague>
                          Week: {teamData.team.week}
                        </Styles.TeamLeague>
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
