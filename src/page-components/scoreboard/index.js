import BackLink from 'Components/back-link';
import GameContainer from 'Components/game-container';
import Metadata from 'Components/metadata';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';

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
          return <GameContainer game={game} key={game.teamA} />;
        })}
      </$GlobalContainer>
    </>
  );
};

export default Scoreboard;
