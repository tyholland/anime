import React from 'react';
import {
  $GameplayCardSection,
  $GameplayCardContainer,
} from './gameplayCard.style';

const BracketCard = () => {
  return (
    <$GameplayCardContainer>
      <$GameplayCardSection>
        Every Bracket's first round starts on the Sunday following the creation
        of the Bracket. So, if you are unable to vote on the matchups in the
        first round, you will most likely need to wait until the following
        Sunday when the first round becomes active.
      </$GameplayCardSection>
      <$GameplayCardSection>
        After the first round becomes active, the second round will become
        active after the next Sunday, and then the first round will become
        inactive. Each round, including the championship round, will last only
        one week, so make sure to get all your votes in as soon as possible.
      </$GameplayCardSection>
      <$GameplayCardSection>
        You can vote on a specific matchup. If you click on a character in a
        matchup, that means you are voting for that character to win. Once you
        click on a character, you will no longer be able to vote on that
        specific matchup anymore.
      </$GameplayCardSection>
      <$GameplayCardSection>
        You can view matchup details by clicking on the number in between both
        characters in a matchup. A modal will pop up with all the details for
        that matchup.
      </$GameplayCardSection>
      <$GameplayCardSection>
        You can click on a round that isn't ready to be voted on, but you will
        get an error message. You have to wait for that round to be active in
        order to make any votes.
      </$GameplayCardSection>
    </$GameplayCardContainer>
  );
};

export default BracketCard;
