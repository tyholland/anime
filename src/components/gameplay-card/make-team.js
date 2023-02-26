import React from 'react';
import {
  $GameplayCardSection,
  $GameplayCardContainer,
} from './gameplayCard.style';

const MakeTeam = () => {
  return (
    <$GameplayCardContainer>
      <$GameplayCardSection>
        Each user is allowed a maximum limit of 9000 points which they can use
        to acquire characters and battlefields for their team. Each character's
        worth is based on their original power level, while each battlefield is
        worth a certain number of points. Once all teams have been added, the
        league will begin on the first Sunday, and an email will be sent to the
        league to announce the start date.
      </$GameplayCardSection>
      <$GameplayCardSection>
        Some teams may have the same characters, but the power levels of those
        characters will vary based on the vote system, support buffers,
        battlefield buffers, and villain debuffers. Additionally, weekly
        elemental affinities will have the same effect on a specific character,
        regardless of which team they are on.
      </$GameplayCardSection>
    </$GameplayCardContainer>
  );
};

export default MakeTeam;
