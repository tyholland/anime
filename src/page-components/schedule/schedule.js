import BackLink from 'Components/back-link/back-link';
import Metadata from 'Components/metadata/metadata';
import NotUser from 'Components/not-user/not-user';
import ReadMore from 'Components/read-more/read-more';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error/error';
import React, { useEffect, useState } from 'react';
import { useAppContext } from 'src/hooks/context';
import { getSchedule } from 'src/requests/team';
import * as GlobalStyles from 'Styles/global.style';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import * as Styles from './schedule.style';
import GameSchedule from 'Components/gameplay-card/schedule';
import Notification from 'src/modals/notification/notification';

const Schedule = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [games, setGames] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [account, setAccount] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleSchedule = async () => {
    const { league_id } = router.query;

    try {
      const games = await getSchedule(league_id, currentUser?.token);

      setGames(games);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get game schedule'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!account) {
      handleSchedule();
    }
  }, [router.query, account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Team Schedule"
        description="View your teams schedule for the regular season. See who you play, what the score of the matchup was and more."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <BackLink />
          <GlobalStyles.GlobalContainer className="grid schedule">
            {games?.map((game) => {
              const { week, teamA, teamB, scoreA, scoreB, match, leagueComplete } = game;
              const activeGames = games.filter(
                (match) => match.scoreA > 0 || match.scoreB > 0
              );
              const isOldWeek = activeGames[activeGames.length - 1].week > week;
              const highlight = activeGames.length >= week;

              const isWinner = (team) => {
                const winner =
                  team === teamA ? scoreA > scoreB : scoreB > scoreA;

                return isOldWeek || leagueComplete ? winner : false;
              };

              const handleClick = () => {
                if (!highlight) {
                  return;
                }

                if (teamB === 'Bye') {
                  setModalIsOpen(true);
                  return;
                }

                router.push(`/matchup?matchup_id=${match}`);
              };

              return (
                <Styles.ScheduleWrapper
                  key={week}
                  className={!highlight && 'noHighlight'}
                  onClick={handleClick}
                >
                  <div>Week {week}:</div>
                  <Styles.ScheduleTeamContainer>
                    <Styles.ScheduleTeamSection
                      className={isWinner(teamA) && 'winner'}
                    >
                      <Styles.ScheduleTeamName>{teamA}</Styles.ScheduleTeamName>
                      <div>{scoreA}</div>
                    </Styles.ScheduleTeamSection>
                    <Styles.ScheduleTeamSection
                      className={isWinner(teamB) && 'winner'}
                    >
                      <Styles.ScheduleTeamName>{teamB}</Styles.ScheduleTeamName>
                      <div>{scoreB}</div>
                    </Styles.ScheduleTeamSection>
                  </Styles.ScheduleTeamContainer>
                </Styles.ScheduleWrapper>
              );
            })}
          </GlobalStyles.GlobalContainer>
          <ReadMore>
            <GameSchedule />
          </ReadMore>
          <Notification
            message="This is a Bye week. There are no matchups on a bye week."
            closeModal={closeModal}
            modalIsOpen={modalIsOpen}
          />
        </>
      )}
    </>
  );
};

export default Schedule;
