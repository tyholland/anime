import React from 'react';
import {
  $GameplayCardSection,
  $GameplayCardTitle,
  $GameplayCardContainer,
} from './gameplayCard.style';

const Voting = () => {
  return (
    <$GameplayCardContainer>
      <$GameplayCardSection>
        <$GameplayCardTitle>Initiate User Voting</$GameplayCardTitle>
        <div>
          To initiate user voting, Team A should go to their matchup and click
          on a character's points, which will open up that character's point
          breakdown. Then, they can click the button to get votes. Once user
          voting has been initiated, Team B cannot initiate their own user
          voting for the same head-to-head battle.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>
          Can the other team get User Voting?
        </$GameplayCardTitle>
        <div>
          Team B can utilize the user voting initiated by Team A to increase
          their chances of winning the head-to-head battle. If Team B receives
          more votes, Team A will lose points while Team B will gain points.
        </div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>What about a Tie in Voting</$GameplayCardTitle>
        <div>
          If there is a tie in user voting, neither team will gain or lose any
          points.
        </div>
      </$GameplayCardSection>
    </$GameplayCardContainer>
  );
};

export default Voting;
