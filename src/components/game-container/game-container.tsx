import { useRouter } from 'next/router';
import React, { useState } from 'react';
import * as Styles from './gameContainer.style';
import Notification from 'Modals/notification/notification';
import { GameContainerProps } from 'Utils/types';

const GameContainer = ({ game, gameNum = null }: GameContainerProps) => {
  const { teamA, teamB, scoreA, scoreB, match } = game;
  const router = useRouter();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

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
      <Styles.GameContainerWrapper
        isBye={teamB === 'Bye' || !match}
        key={teamA}
        onClick={handleClick}
      >
        <Styles.GameContainerTeamContainer>
          {!!gameNum && <Styles.GameContainerGame>Game {gameNum}</Styles.GameContainerGame>}
          <Styles.GameContainerTeamSection>
            <Styles.GameContainerTeamName>{teamA}</Styles.GameContainerTeamName>
            <div>{scoreA}</div>
          </Styles.GameContainerTeamSection>
          <Styles.GameContainerTeamSection>
            <Styles.GameContainerTeamName>{teamB}</Styles.GameContainerTeamName>
            <div>{scoreB}</div>
          </Styles.GameContainerTeamSection>
        </Styles.GameContainerTeamContainer>
      </Styles.GameContainerWrapper>
      <Notification
        message="This is a Bye week. There are no matchups on a bye week."
        closeModal={closeModal}
        modalIsOpen={modalIsOpen}
      />
    </>
  );
};

export default GameContainer;
