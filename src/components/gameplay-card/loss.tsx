import React from 'react';
import * as Styles from './gameplayCard.style';

const Loss = () => {
  return (
    <Styles.GameplayCardContainer>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>
          Weekly Affinity
        </Styles.GameplayCardTitle>
        <div>
          Beware of affinity vulnerabilities! If a character's weakness aligns
          with one of the weekly affinities, they will suffer damage. This damage is a
          percentage of the unleashed power of the weekly affinity.
        </div>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>Villains</Styles.GameplayCardTitle>
        <div>
          If a character has the same weakness as the villain's affinity, they
          will lose points. The number of points lost will be a percentage of
          the damage inflicted by the villain. However, this does not apply to a
          battlefield.
        </div>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>Battlefield</Styles.GameplayCardTitle>
        <div>
          If a character has the same weakness as the battlefield, they will
          receive damage. Additionally, a battlefield can also damage allied
          characters without an affinity, and the amount of damage will be a
          percentage of the battlefield's power boost.
        </div>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>User Voting</Styles.GameplayCardTitle>
        <div>
          In a specific head-to-head battle, characters can receive damage,
          which will be a 150% power loss. However, this does not apply to a
          battlefield.
        </div>
      </Styles.GameplayCardSection>
    </Styles.GameplayCardContainer>
  );
};

export default Loss;
