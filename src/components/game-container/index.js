import { useRouter } from 'next/router';
import React, { useState } from 'react';
import {
  $GameContainerTeamSection,
  $GameContainerWrapper,
  $GameContainerTeamContainer,
  $GameContainerTeamName,
  $GameContainerGame,
} from './gameContainer.style';
import Notification from 'src/modals/notification';

const GameContainer = ({ game, gameNum = null }) => {
  const { teamA, teamB, scoreA, scoreB, match } = game;
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleClick = () => {
    if (!match) {
      return;
    }

    if (teamB === 'Bye') {
      setModalIsOpen(true);
      return;
    }

    router.push(`/matchup?matchup_id=${match}`);
  };

  return (
    <>
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
      <Notification
        message="This is a Bye week. There are no matchups on a bye week."
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </>
  );
};

export default GameContainer;
