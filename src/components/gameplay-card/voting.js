import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $GameplayCardSection, $GameplayCardTitle } from './gameplayCard.style';

const Voting = () => {
  return (
    <$GlobalContainer>
      <$GameplayCardSection>
        <$GameplayCardTitle>Initiate User Voting</$GameplayCardTitle>
        <div>Team A can initiate User Voting by going to their Matchup. Then clicking on a character's points, that'll open up that characters point break down. Then they can click the button to get votes. After User Voting has been initiated, then team B can not initiate their own User Voting for the same Head-to-Head Battle.</div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>Can the other team get User Voting?</$GameplayCardTitle>
        <div>Team B can use that same User Voting initiated by team A to get their character to win the Head-to-Head Battle. If team B gets more votes, that will result in team A losing points and team B gaining points.</div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle>What about a Tie in Voting</$GameplayCardTitle>
        <div>In the event of a tie in User Voting. Neither team gains or loses and points.</div>
      </$GameplayCardSection>
    </$GlobalContainer>
  );
};

export default Voting;
