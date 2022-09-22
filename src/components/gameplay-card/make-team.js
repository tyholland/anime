import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $GameplayCardSection } from './gameplayCard.style';

const MakeTeam = () => {
  return (
    <$GlobalContainer>
      <$GameplayCardSection>
        All users will have a max limit of 9000 points. The users can use those points to add characters and battlefields to their team.
      </$GameplayCardSection>
      <$GameplayCardSection>
        Each character will be worth whatever their original power level is. Each battlefield will be worth the available points.
      </$GameplayCardSection>
      <$GameplayCardSection>
        While making your team, if you go over the limit, you'll get this message, "The Scouter says your power level is OVER 9000! Please readjust your roster"
      </$GameplayCardSection>
      <$GameplayCardSection>
        The league will start on the first Monday following all the teams being added. An email will be sent to the league announcing the start date.
      </$GameplayCardSection>
      <$GameplayCardSection>
        Some teams have the same characters. However the power levels of those same characters will vary depending on the vote system, support buffers, battlefield buffers, and villain debuffers. Weekly elemental affinities will have the same effect for a specific character no matter whose team they are on.
      </$GameplayCardSection>
    </$GlobalContainer>
  );
};

export default MakeTeam;
