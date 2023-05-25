import React from 'react';
import * as Styles from './gameplayCard.style';

const Voting = () => {
  return (
    <Styles.GameplayCardContainer>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>
          Initiate User Voting
        </Styles.GameplayCardTitle>
        <div>
          To summon the power of the vote, Team A should navigate to their
          matchup and click on a character's power level, unveiling the essence
          of their strength. Then, they can click the button to get votes. Once
          user voting has been initiated, Team B cannot initiate their own user
          voting for the same head-to-head battle.
        </div>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>
          Can the other team get User Voting?
        </Styles.GameplayCardTitle>
        <div>
          Team B can utilize the user voting initiated by Team A to increase
          their chances of winning the head-to-head battle. If Team B receives
          more votes, Team A will lose points while Team B will gain points.
        </div>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>
          What about a Tie in Voting
        </Styles.GameplayCardTitle>
        <div>
          If there is a tie in user voting, neither team will gain or lose any
          points.
        </div>
      </Styles.GameplayCardSection>
    </Styles.GameplayCardContainer>
  );
};

export default Voting;
