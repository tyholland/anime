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
    </$GameplayCardContainer>
  );
};

export default MakeTeam;
