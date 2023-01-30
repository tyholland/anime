import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import {
  $ScheduleTeamSection,
  $ScheduleWrapper,
  $ScheduleTeamContainer,
  $ScheduleTeamName,
} from './schedule.style';

const Schedule = ({ games }) => {
  return (
    <>
      <BackLink />
      <Metadata
        title="Team Schedule"
        description="View your teams schedule for the regular season. See who you play, what the score of the matchup was and more."
      />
      <$GlobalContainer className="grid schedule">
        {games.map((game) => {
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
