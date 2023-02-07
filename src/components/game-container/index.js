import React from 'react';
import {
  $GameContainerTeamSection,
  $GameContainerWrapper,
  $GameContainerTeamContainer,
  $GameContainerTeamName,
  $GameContainerGame,
} from './gameContainer.style';

const GameContainer = ({ game, gameNum = null }) => {
  const { teamA, teamB, scoreA, scoreB } = game;

  return (
    <$GameContainerWrapper key={teamA}>
      <$GameContainerTeamContainer>
        {!!gameNum && <$GameContainerGame>Game {gameNum}</$GameContainerGame>}
        <$GameContainerTeamSection>
          <$GameContainerTeamName>{teamA}</$GameContainerTeamName>
          <div>{scoreA}</div>
        </$GameContainerTeamSection>
        <$GameContainerTeamSection>
          <$GameContainerTeamName>{teamB}</$GameContainerTeamName>
          <div>{scoreB}</div>
        </$GameContainerTeamSection>
      </$GameContainerTeamContainer>
    </$GameContainerWrapper>
  );
};

export default GameContainer;
