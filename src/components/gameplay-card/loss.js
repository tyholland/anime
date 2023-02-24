import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $GameplayCardSection, $GameplayCardTitle } from './gameplayCard.style';

const Loss = () => {
  return (
    <$GlobalContainer>
      <$GameplayCardSection>
        <$GameplayCardTitle>Weekly Element Affinity</$GameplayCardTitle>
        <div>
          If a character has the same weakness as the weekly element affinity,
          they will receive damage. This damage will be a percentage of the
          power boost provided by the weekly element affinity.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>Villains</$GameplayCardTitle>
        <div>
          If a character has the same weakness as the villain's affinity, they
          will lose points. The number of points lost will be a percentage of
          the damage inflicted by the villain. However, this does not apply to a
          battlefield.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>Battlefield</$GameplayCardTitle>
        <div>
          If a character has the same weakness as the battlefield, they will
          receive damage. Additionally, a battlefield can also damage allied
          characters without an affinity, and the amount of damage will be a
          percentage of the battlefield's power boost.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>User Voting</$GameplayCardTitle>
        <div>
          In a specific head-to-head battle, characters can receive damage,
          which will be a 150% power loss. However, this does not apply to a
          battlefield.
        </div>
      </$GameplayCardSection>
    </$GlobalContainer>
  );
};

export default Loss;
