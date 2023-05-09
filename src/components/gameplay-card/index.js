import Affinities from 'Components/gameplay-card/affinities';
import Boost from 'Components/gameplay-card/boost';
import Loss from 'Components/gameplay-card/loss';
import Voting from 'Components/gameplay-card/voting';
import React from 'react';
import { $GlobalTitle, $CollapsibleStyles } from 'Styles/global.style';
import Collapsible from 'react-collapsible';
import MakeTeam from 'Components/gameplay-card/make-team';
import Schedule from 'Components/gameplay-card/schedule';
import BracketCard from 'Components/gameplay-card/bracket-card';

const GameplayCard = () => {
  return (
    <>
      <$CollapsibleStyles />
      <$GlobalTitle>Gameplay</$GlobalTitle>
      <Collapsible trigger="Making Your Team" triggerTagName="div" triggerElementProps={{ id: 'team', 'aria-controls': 'team' }} contentElementId="team">
        <MakeTeam />
      </Collapsible>
      <Collapsible trigger="League Schedule" triggerTagName="div" triggerElementProps={{ id: 'schedule', 'aria-controls': 'schedule' }} contentElementId="schedule">
        <Schedule />
      </Collapsible>
      <Collapsible trigger="Weekly Element Affinities" triggerTagName="div" triggerElementProps={{ id: 'affinity', 'aria-controls': 'affinity' }} contentElementId="affinity">
        <Affinities />
      </Collapsible>
      <Collapsible trigger="Power Boosts" triggerTagName="div" triggerElementProps={{ id: 'boost', 'aria-controls': 'boost' }} contentElementId="boost">
        <Boost />
      </Collapsible>
      <Collapsible trigger="Power Loss" triggerTagName="div" triggerElementProps={{ id: 'loss', 'aria-controls': 'loss' }} contentElementId="loss">
        <Loss />
      </Collapsible>
      <Collapsible trigger="Voting Rules" triggerTagName="div" triggerElementProps={{ id: 'vote', 'aria-controls': 'vote' }} contentElementId="vote">
        <Voting />
      </Collapsible>
      <Collapsible trigger="Bracket" triggerTagName="div" triggerElementProps={{ id: 'bracket', 'aria-controls': 'bracket' }} contentElementId="bracket">
        <BracketCard />
      </Collapsible>
    </>
  );
};

export default GameplayCard;
