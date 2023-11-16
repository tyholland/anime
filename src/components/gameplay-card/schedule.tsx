import React from 'react';
import * as Styles from './gameplayCard.style';

const Schedule = () => {
  return (
    <Styles.GameplayCardContainer>
      <Styles.GameplayCardSection>
        Embark on a 12-week quest with your league, ranging from a party of 6 to
        a battalion of 10 teams. Every week, unlock the power of a new elemental
        affinity!
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        Week 10 will mark the start of the playoffs, with the top 6 teams
        qualifying for this stage. Finally, Week 12 will host the finals.
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <strong>Mondays</strong>
        <ul>
          <li>The start of a new league</li>
          <li>The start of a new week within a league</li>
          <li>Can update your roster</li>
        </ul>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <strong>Thursdays</strong>
        <ul>
          <li>First weekly Affinity for your league matchup drops</li>
        </ul>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <strong>Fridays</strong>
        <ul>
          <li>Can no longer update your roster</li>
          <li>
            Individual head-to-head voting can be activated
            <ul>
              <li>
                Send the individual head-to-head matchups to your friends, so
                they can vote for your character
              </li>
            </ul>
          </li>
          <li>
            Villain and Battlefield damage can now be seen in your league
            matchup
          </li>
        </ul>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <strong>Sundays</strong>
        <ul>
          <li>Can no longer vote on individual head-to-head matchups</li>
          <li>Voting results/points can now be seen in your league matchup</li>
          <li>Second weekly Affinity for your league matchup drops</li>
        </ul>
      </Styles.GameplayCardSection>
    </Styles.GameplayCardContainer>
  );
};

export default Schedule;
