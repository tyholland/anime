import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import NotUser from 'Components/not-user';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error';
import React, { useEffect, useState } from 'react';
import { useAppContext } from 'src/hooks/context';
import { getSchedule } from 'src/requests/team';
import { $GlobalContainer } from 'Styles/global.style';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import {
  $ScheduleTeamSection,
  $ScheduleWrapper,
  $ScheduleTeamContainer,
  $ScheduleTeamName,
} from './schedule.style';

const Schedule = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [games, setGames] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [account, setAccount] = useState(null);

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
    if (Object.keys(router.query).length && !!account) {
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
          <$GlobalContainer className="grid schedule">
            {games?.map((game) => {
              const { week, teamA, teamB, scoreA, scoreB } = game;

              return (
                <$ScheduleWrapper key={week}>
                  <div>Week {week}:</div>
                  <$ScheduleTeamContainer>
                    <$ScheduleTeamSection>
                      <$ScheduleTeamName>{teamA}</$ScheduleTeamName>
                      <div>{scoreA}</div>
                    </$ScheduleTeamSection>
                    <$ScheduleTeamSection>
                      <$ScheduleTeamName>{teamB}</$ScheduleTeamName>
                      <div>{scoreB}</div>
                    </$ScheduleTeamSection>
                  </$ScheduleTeamContainer>
                </$ScheduleWrapper>
              );
            })}
          </$GlobalContainer>
        </>
      )}
    </>
  );
};

export default Schedule;
