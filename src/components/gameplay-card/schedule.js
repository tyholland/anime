import React from 'react';
import {
  $GameplayCardSection,
  $GameplayCardContainer,
} from './gameplayCard.style';

const Schedule = () => {
  return (
    <$GameplayCardContainer>
      <$GameplayCardSection>
        Each league will span 12 weeks and will include a minimum of 6 and a
        maximum of 10 teams. Additionally, a new elemental affinity will be
        accessible on a weekly basis.
      </$GameplayCardSection>
      <$GameplayCardSection>
        Week 10 will mark the start of the playoffs, with the top 6 teams
        qualifying for this stage. Finally, Week 12 will host the finals.
      </$GameplayCardSection>
    </$GameplayCardContainer>
  );
};

export default Schedule;
