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
      <$GameplayCardSection>
        <strong>Mondays</strong>
        <ul>
          <li>The start of a new league</li>
          <li>The start of a new week within a league</li>
          <li>Can update your roster</li>
        </ul>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <strong>Thursdays</strong>
        <ul>
          <li>Can no longer update your roster</li>
          <li>Individual head-to-head voting can be activated</li>
          <li>Send the individual head-to-head matchups to your friends, so they can vote for your character</li>
        </ul>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <strong>Fridays</strong>
        <ul>
          <li>Villain and Battlefield damage can now be seen in your league matchup</li>
        </ul>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <strong>Sundays</strong>
        <ul>
          <li>Can no longer vote on individual head-to-head matchups</li>
          <li>Voting results/points can now be seen in your league matchup</li>
          <li>Weekly Affinity for your league matchup drops</li>
        </ul>
      </$GameplayCardSection>
    </$GameplayCardContainer>
  );
};

export default Schedule;
