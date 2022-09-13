import Affinities from 'Components/gameplay-card/affinities';
import Boost from 'Components/gameplay-card/boost';
import Loss from 'Components/gameplay-card/loss';
// import Suggestions from 'Components/gameplay-card/suggestion';
import Voting from 'Components/gameplay-card/voting';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import { $GameplayStyles } from './gameplay.style';

const Gameplay = () => {
  return (
    <>
      <$GameplayStyles />
      <$GlobalContainer>
        <Collapsible trigger="Weekly Element Affinities" className="something">
          <Affinities />
        </Collapsible>
        <Collapsible trigger="Power Boosts">
          <Boost />
        </Collapsible>
        <Collapsible trigger="Power Loss">
          <Loss />
        </Collapsible>
        <Collapsible trigger="Voting Rules">
          <Voting />
        </Collapsible>
        {/* <Collapsible trigger="Suggestions">
          <Suggestion/>
        </Collapsible> */}
      </$GlobalContainer>
    </>
  );
};

export default Gameplay;
