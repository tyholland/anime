import React from 'react';
import * as Styles from './gameplayCard.style';

const Boost = () => {
  return (
    <Styles.GameplayCardContainer>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>Weekly Element Affinity</Styles.GameplayCardTitle>
        <div>
          If a character has the same affinity as the weekly element affinity,
          they will receive a power boost. This boost will be a percentage of
          the power boost provided by the weekly element affinity.
        </div>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>Support Character</Styles.GameplayCardTitle>
        <div>
          Support characters can provide a power boost to allied characters,
          which is a percentage of the support character's boost. If a support
          character has two affinities, and the character they are supporting
          shares both affinities, that character has the chance to receive a
          double boost. This boost applies to Captains and Brawlers, except for
          Brawlers in the 2v2 Battle, who are not affected by a normal support
          character. Additionally, the boost does not apply to a battlefield.
        </div>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>Support Character in 2v2 Battle</Styles.GameplayCardTitle>
        <div>
          In a 2v2 battle, support characters can only provide a power boost to
          the brawler they are teamed up with, and this boost is a percentage of
          the support character's power boost. If the support character has two
          affinities, and the brawler shares both affinities, the brawler has
          the chance to receive a double boost. Characters who are not in the
          2v2 battle will not be affected by the support character in a 2v2
          battle.
        </div>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>Battlefield</Styles.GameplayCardTitle>
        <div>
          If a character has the same affinity as the battlefield, they will
          receive a boost. Additionally, a battlefield can boost an allied
          character without an affinity. This boost will be a percentage of the
          battlefield's power boost. If a battlefield has two affinities and a
          character shares both affinities, that character has the chance to
          receive a double boost.
        </div>
      </Styles.GameplayCardSection>
      <Styles.GameplayCardSection>
        <Styles.GameplayCardTitle>User Voting</Styles.GameplayCardTitle>
        <div>
          In a specific head-to-head battle, characters involved in the battle
          can receive a 250% power boost. However, this boost does not apply to
          a battlefield.
        </div>
      </Styles.GameplayCardSection>
    </Styles.GameplayCardContainer>
  );
};

export default Boost;
