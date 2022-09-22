import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $GameplayCardSection } from './gameplayCard.style';

const Schedule = () => {
  return (
    <$GlobalContainer>
      <$GameplayCardSection>
        Each league will be 12 weeks long. There will be a minimum number of 6 teams in a league. There will also be a maximum number of 10 teams in a league.
      </$GameplayCardSection>
      <$GameplayCardSection>
        An element affinity will be accessed on a weekly basis.
      </$GameplayCardSection>
      <$GameplayCardSection>
        The Playoffs will start on Week 10. The top 6 teams will make the Playoffs and the top 2 teams will get a bye.
      </$GameplayCardSection>
      <$GameplayCardSection>
        The Finals is week 12.
      </$GameplayCardSection>
    </$GlobalContainer>
  );
};

export default Schedule;
