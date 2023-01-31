import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import {
  $ScoreboardTeamSection,
  $ScoreboardWrapper,
  $ScoreboardTeamContainer,
  $ScoreboardTeamName,
} from './scoreboard.style';

const Scoreboard = ({ games }) => {
  return (
    <>
      <BackLink />
      <Metadata
        title="League Scoreboard"
        description="View the league scoreboard for the current week. See how all the other teams are doing for the week."
      />
      <$GlobalContainer className="grid schedule">
        {games.map((game) => {
          const { teamA, teamB, scoreA, scoreB } = game;

          return (
            <$ScoreboardWrapper key={teamA}>
              <$ScoreboardTeamContainer>
                <$ScoreboardTeamSection>
                  <$ScoreboardTeamName>{teamA}</$ScoreboardTeamName>
                  <div>{scoreA}</div>
                </$ScoreboardTeamSection>
                <$ScoreboardTeamSection>
                  <$ScoreboardTeamName>{teamB}</$ScoreboardTeamName>
                  <div>{scoreB}</div>
                </$ScoreboardTeamSection>
              </$ScoreboardTeamContainer>
            </$ScoreboardWrapper>
          );
        })}
      </$GlobalContainer>
    </>
  );
};

export default Scoreboard;
