import Affinities from 'Components/gameplay-card/affinities';
import Boost from 'Components/gameplay-card/boost';
import Loss from 'Components/gameplay-card/loss';
import Voting from 'Components/gameplay-card/voting';
import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import { $GameplayStyles } from './gameplay.style';
import MakeTeam from 'Components/gameplay-card/make-team';
import Schedule from 'Components/gameplay-card/schedule';
import Metadata from 'Components/metadata';

const Gameplay = () => {
  return (
    <>
      <$GameplayStyles />
      <Metadata
        title="Gameplay"
        description="Read about all the rules of the ABZ Fantasy League. See how the regular season is split up and then the playoffs."
      />
      <$GlobalContainer>
        <$GlobalTitle>Gameplay</$GlobalTitle>
        <Collapsible trigger="Making Your Team" triggerTagName="div">
          <MakeTeam />
        </Collapsible>
        <Collapsible trigger="League Schedule" triggerTagName="div">
          <Schedule />
        </Collapsible>
        <Collapsible trigger="Weekly Element Affinities" triggerTagName="div">
          <Affinities />
        </Collapsible>
        <Collapsible trigger="Power Boosts" triggerTagName="div">
          <Boost />
        </Collapsible>
        <Collapsible trigger="Power Loss" triggerTagName="div">
          <Loss />
        </Collapsible>
        <Collapsible trigger="Voting Rules" triggerTagName="div">
          <Voting />
        </Collapsible>
      </$GlobalContainer>
    </>
  );
};

export default Gameplay;
