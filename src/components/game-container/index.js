import { useRouter } from 'next/router';
import React from 'react';
import {
  $GameContainerTeamSection,
  $GameContainerWrapper,
  $GameContainerTeamContainer,
  $GameContainerTeamName,
  $GameContainerGame,
} from './gameContainer.style';

const GameContainer = ({ game, gameNum = null }) => {
  const { teamA, teamB, scoreA, scoreB, match } = game;
  const router = useRouter();

  const handleClick = () => {
    router.push(`/matchup?matchup_id=${match}`);
  };

  return (
    <$GameContainerWrapper key={teamA} onClick={handleClick}>
      <$GameContainerTeamContainer>
        {!!gameNum && <$GameContainerGame>Game {gameNum}</$GameContainerGame>}
        <$GameContainerTeamSection>
          <$GameContainerTeamName>{teamA}</$GameContainerTeamName>
          <div>{scoreA < 0 ? 0 : scoreA}</div>
        </$GameContainerTeamSection>
        <$GameContainerTeamSection>
          <$GameContainerTeamName>{teamB}</$GameContainerTeamName>
          <div>{scoreB < 0 ? 0 : scoreB}</div>
        </$GameContainerTeamSection>
      </$GameContainerTeamContainer>
    </$GameContainerWrapper>
  );
};

export default GameContainer;
