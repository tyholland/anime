import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
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

  const handleSchedule = async () => {
    const { league_id } = router.query;

    try {
      const games = await getSchedule(league_id, currentUser.token);

      setGames(games);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get game schedule'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length) {
      handleSchedule();
    }
  }, [router.query]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <BackLink />
      <Metadata
        title="Team Schedule"
        description="View your teams schedule for the regular season. See who you play, what the score of the matchup was and more."
      />
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
  );
};

export default Schedule;
