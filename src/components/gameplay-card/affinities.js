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
        <strong>Affinities</strong>: Fire, Water, Earth, Wind, Arcane, Darkness,
        Celestial, Ice, Eletric, No Affinity
      </div>
      <div>
        <strong>Affinities Combos</strong>: Wind & Water, Darkness & Ice, Arcane
        & Fire
      </div>
      <$GameplayCardWrapper>
        <div>
          <$GameplayCardHeader>Regular Season</$GameplayCardHeader>
          <$GameplayCardSection>
            <$GameplayCardTitle className="bold">
              Week 1 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardSection>
            <$GameplayCardTitle className="bold">
              Week 2 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardSection>
            <$GameplayCardTitle className="bold">
              Week 3 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardSection>
            <$GameplayCardTitle className="bold">
              Week 4 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardSection>
            <$GameplayCardTitle className="bold">
              Week 5 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardSection>
            <$GameplayCardTitle className="bold">
              Week 6 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardSection>
            <$GameplayCardTitle className="bold">
              Week 7 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardSection>
            <$GameplayCardTitle className="bold">
              Week 8 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardSection>
            <$GameplayCardTitle className="bold">
              Week 9 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
        </div>
        <div>
          <$GameplayCardHeader>Playoffs (first round)</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">
              Week 10 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardHeader>Semi-Finals (second round)</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">
              Week 11 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardHeader>Finals</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">
              Week 12 - Random Affinity or Combo
            </$GameplayCardTitle>
          </$GameplayCardSection>
        </div>
      </$GameplayCardWrapper>
    </$GameplayCardContainer>
  );
};

export default Affinities;
