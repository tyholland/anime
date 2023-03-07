import React from 'react';
import {
  $GameplayCardSection,
  $GameplayCardTitle,
  $GameplayCardHeader,
  $GameplayCardWrapper,
  $GameplayCardContainer,
} from './gameplayCard.style';

const Affinities = () => {
  return (
    <$GameplayCardContainer>
      <div>
        The weekly affinity will be a random affinity or a combination of
        affinities. It will be applied every Sunday. Depending on what the
        affinity is, it could determine whether your team wins or loses the
        match.
      </div>
      <p>
        <strong>Affinities</strong>: Fire, Water, Earth, Wind, Arcane, Darkness,
        Celestial, Ice, Electric, No Affinity
      </p>
      <p>
        <strong>Affinities Combos</strong>: Wind & Water, Darkness & Ice, Arcane
        & Fire
      </p>
      <$GameplayCardWrapper>
        <div>
          <$GameplayCardHeader>Regular Season</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 1</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 2</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 3</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 4</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 5</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 6</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 7</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 8</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 9</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
        </div>
        <div>
          <$GameplayCardHeader>Playoffs (first round)</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 10</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
          <$GameplayCardHeader>Semi-Finals (second round)</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 11</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
          <$GameplayCardHeader>Finals</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 12</$GameplayCardTitle>
            <$GameplayCardSection className="indent">
              Random Affinity/Combos
            </$GameplayCardSection>
          </$GameplayCardSection>
        </div>
      </$GameplayCardWrapper>
      <div>
        <strong>Boost or Damage %</strong>: Fire: 250%, Water: 300%, Earth:
        300%, Wind: 250%, Arcane: 200%, Darkness: 250%, Celestial: 300%, Ice:
        300%, Electric: 250%, No Affinity: 50%
      </div>
    </$GameplayCardContainer>
  );
};

export default Affinities;
