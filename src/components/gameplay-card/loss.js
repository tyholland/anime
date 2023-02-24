import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $GameplayCardSection, $GameplayCardTitle } from './gameplayCard.style';

const Loss = () => {
  return (
    <$GlobalContainer>
      <$GameplayCardSection>
        <$GameplayCardTitle>Weekly Element Affinity</$GameplayCardTitle>
        <div>
          Characters with the same weakness as the Weekly Element Affinity will
          receive damage. The character will lose a percentage of the Weekly
          Element Affinity power boost.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>Villains</$GameplayCardTitle>
        <div>
          Characters with the same weakness as the Villain's Affinity will lose
          points. The character will lose a percentage of the Villain's damage.
          This doesn't apply to a Battlefield.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>Battlefield</$GameplayCardTitle>
        <div>
          Characters with the same weakness as the Battlefield will receive
          damage. A Battlefield can also damage allied characters without an
          Affinity. The character will lose a percentage of the Battlefield
          power boost.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>User Voting</$GameplayCardTitle>
        <div>
          Characters in a specific Head-to-Head Battle can receive damage. The
          character will get a 150% power loss. This doesn't apply to a
          Battlefield.
        </div>
      </$GameplayCardSection>
    </$GlobalContainer>
  );
};

export default Loss;
