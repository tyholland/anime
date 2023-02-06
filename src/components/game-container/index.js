import React from 'react';
import {
  $GameContainerTeamSection,
  $GameContainerWrapper,
  $GameContainerTeamContainer,
  $GameContainerTeamName,
} from './gameContainer.style';

const GameContainer = ({ game }) => {
  const { teamA, teamB, scoreA, scoreB } = game;

  return (
    <$GameContainerWrapper key={teamA}>
      <$GameContainerTeamContainer>
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
