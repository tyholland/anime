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
        If you don't see a specific character in the list when selecting a
        character, it most likely means that the character is already assigned
        to another team. You will need to choose a different character.
      </$GameplayCardSection>
      <$GameplayCardSection>
        Starting with Week 2, bye weeks will come into effect for all
        characters. Bye weeks will last through Week 12. All characters within
        an anime series will have the same bye week. You can find a character's
        bye week on that character's bio page.
      </$GameplayCardSection>
    </$GameplayCardContainer>
  );
};

export default MakeTeam;
