import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import {
  $StandingsTeamSection,
  $StandingsWrapper,
  $StandingsTeamContainer,
  $StandingsTeamName,
} from './standings.style';

const Standings = ({ games }) => {
  return (
    <>
      <BackLink />
      <Metadata
        title="League Standings"
        description="View the league standings. See how all the teams are ranked amongst each other."
      />
      <$GlobalContainer className="grid schedule">
        {games.map((game, index) => {
          const { team, win, loss } = game;

          return (
            <$StandingsWrapper key={team}>
              <div>{index + 1}.</div>
              <$StandingsTeamContainer>
                <$StandingsTeamSection>
                  <$StandingsTeamName>{team}</$StandingsTeamName>
                  <div>{`${win} - ${loss}`}</div>
                </$StandingsTeamSection>
              </$StandingsTeamContainer>
            </$StandingsWrapper>
          );
        })}
      </$GlobalContainer>
    </>
  );
};

export default Standings;
