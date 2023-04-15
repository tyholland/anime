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
    if (teamB === 'Bye' || !match) {
      return;
    }

    router.push(`/matchup?matchup_id=${match}`);
  };

  return (
    <$GameContainerWrapper
      isBye={teamB === 'Bye' || !match}
      key={teamA}
      onClick={handleClick}
    >
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
