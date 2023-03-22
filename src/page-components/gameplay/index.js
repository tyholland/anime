import React from 'react';
import Metadata from 'Components/metadata';
import GameplayCard from 'Components/gameplay-card';
import { $GlobalContainer } from 'Styles/global.style';

const Gameplay = () => {
  return (
    <>
      <Metadata
        title="Gameplay"
        description="Read about all the rules of the Anime Fantasy League. See how the regular season is split up and then the playoffs."
      />
      <$GlobalContainer>
        <GameplayCard />
      </$GlobalContainer>
    </>
  );
};

export default Gameplay;
