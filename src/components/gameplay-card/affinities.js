import React from 'react';
import * as Styles from './gameplayCard.style';
import * as GlobalStyles from 'Styles/global.style';

const Affinities = () => {
  return (
    <Styles.GameplayCardContainer>
      <div>
        The weekly affinity will be a random affinity or a combination of
        affinities. It will be applied every Sunday. Depending on what the
        affinity is, it could determine whether your team wins or loses the
        match.
      </div>
      <Styles.GameplayCardAffinity>
        <strong>Affinities</strong>: <GlobalStyles.GlobalCircle className="fire"></GlobalStyles.GlobalCircle> Fire, <GlobalStyles.GlobalCircle className="water"></GlobalStyles.GlobalCircle> Water, <GlobalStyles.GlobalCircle className="earth"></GlobalStyles.GlobalCircle> Earth, <GlobalStyles.GlobalCircle className="wind"></GlobalStyles.GlobalCircle> Wind, <GlobalStyles.GlobalCircle className="arcane"></GlobalStyles.GlobalCircle> Arcane, <GlobalStyles.GlobalCircle className="darkness"></GlobalStyles.GlobalCircle> Darkness, <GlobalStyles.GlobalCircle className="celestial"></GlobalStyles.GlobalCircle> Celestial, <GlobalStyles.GlobalCircle className="ice"></GlobalStyles.GlobalCircle> Ice, <GlobalStyles.GlobalCircle className="electric"></GlobalStyles.GlobalCircle> Electric, <GlobalStyles.GlobalCircle className="noAffinity"></GlobalStyles.GlobalCircle> No Affinity
      </Styles.GameplayCardAffinity>
      <Styles.GameplayCardAffinity>
        <strong>Affinities Combos</strong>: <GlobalStyles.GlobalCircle className="wind"></GlobalStyles.GlobalCircle> & <GlobalStyles.GlobalCircle className="water"></GlobalStyles.GlobalCircle>, <GlobalStyles.GlobalCircle className="darkness"></GlobalStyles.GlobalCircle> & <GlobalStyles.GlobalCircle className="ice"></GlobalStyles.GlobalCircle>, <GlobalStyles.GlobalCircle className="arcane"></GlobalStyles.GlobalCircle> & <GlobalStyles.GlobalCircle className="fire"></GlobalStyles.GlobalCircle>
      </Styles.GameplayCardAffinity>
      <Styles.GameplayCardWrapper>
        <div>
          <Styles.GameplayCardHeader>Regular Season</Styles.GameplayCardHeader>
          <Styles.GameplayCardSection className="indent">
            <Styles.GameplayCardTitle className="bold">Weeks 1 - 9</Styles.GameplayCardTitle>
          </Styles.GameplayCardSection>
        </div>
        <div>
          <Styles.GameplayCardHeader>Playoffs (first round)</Styles.GameplayCardHeader>
          <Styles.GameplayCardSection className="indent">
            <Styles.GameplayCardTitle className="bold">Week 10</Styles.GameplayCardTitle>
          </Styles.GameplayCardSection>
          <Styles.GameplayCardHeader>Semi-Finals (second round)</Styles.GameplayCardHeader>
          <Styles.GameplayCardSection className="indent">
            <Styles.GameplayCardTitle className="bold">Week 11</Styles.GameplayCardTitle>
          </Styles.GameplayCardSection>
          <Styles.GameplayCardHeader>Finals</Styles.GameplayCardHeader>
          <Styles.GameplayCardSection className="indent">
            <Styles.GameplayCardTitle className="bold">Week 12</Styles.GameplayCardTitle>
          </Styles.GameplayCardSection>
        </div>
      </Styles.GameplayCardWrapper>
    </Styles.GameplayCardContainer>
  );
};

export default Affinities;
