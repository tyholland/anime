import React from 'react';
import {
  $GameplayCardSection,
  $GameplayCardContainer,
} from './gameplayCard.style';

const MakeTeam = () => {
  return (
    <$GameplayCardContainer>
      <$GameplayCardSection>
      Each user is allowed a maximum limit of 9000 points, which they can use to acquire characters and battlefields for their team, inspired by the world of anime. Once all teams have been added, the league owner can start the league draft with a touch of anime flair. Schedule a time that works best for everyone in your league to have the draft, ensuring that the anticipation is at its peak.
      </$GameplayCardSection>
      <$GameplayCardSection>
      After the draft is over, the league will officially begin on the following Monday after your league draft ends, capturing the excitement and energy of anime battles. Gather your team and prepare for epic clashes, where extraordinary powers and skills will be put to the test.
      </$GameplayCardSection>
      <$GameplayCardSection>
      If you don't see a specific character in the list when selecting a character, it most likely means that the character is already assigned to another team, just like in an intense anime tournament. In such cases, you will need to choose a different character, strategizing to assemble the strongest lineup for your team.
      </$GameplayCardSection>
      <$GameplayCardSection>
      Starting with Week 2, bye weeks will come into effect for all characters, adding a tactical element to the league. Bye weeks will last through Week 12, creating a moment of respite and reflection for the characters and their teams. All characters within an anime series will have the same bye week, allowing you to plan your strategies and rotations accordingly. You can find a character's bye week on that character's bio page, resembling the meticulous research and analysis done by anime enthusiasts to gain an edge in battles.</$GameplayCardSection>
      <$GameplayCardSection>
      Prepare to embark on a thrilling journey in this anime-inspired league, where your imagination will intertwine with the excitement of competition. Unleash the power of your chosen characters, conquer battlefields, and prove your team's worth in the world of anime. Let the league begin, and may the spirit of anime guide you to victory!</$GameplayCardSection>
    </$GameplayCardContainer>
  );
};

export default MakeTeam;
