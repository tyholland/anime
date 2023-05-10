import React from 'react';
import {
  $GameplayCardSection,
  $GameplayCardTitle,
  $GameplayCardHeader,
  $GameplayCardWrapper,
  $GameplayCardContainer,
  $GameplayCardAffinity
} from './gameplayCard.style';
import { $GlobalCircle } from 'Styles/global.style';

const Affinities = () => {
  return (
    <$GameplayCardContainer>
      <div>
        The weekly affinity will be a random affinity or a combination of
        affinities. It will be applied every Sunday. Depending on what the
        affinity is, it could determine whether your team wins or loses the
        match.
      </div>
      <$GameplayCardAffinity>
        <strong>Affinities</strong>: <$GlobalCircle className="fire"></$GlobalCircle> Fire, <$GlobalCircle className="water"></$GlobalCircle> Water, <$GlobalCircle className="earth"></$GlobalCircle> Earth, <$GlobalCircle className="wind"></$GlobalCircle> Wind, <$GlobalCircle className="arcane"></$GlobalCircle> Arcane, <$GlobalCircle className="darkness"></$GlobalCircle> Darkness, <$GlobalCircle className="celestial"></$GlobalCircle> Celestial, <$GlobalCircle className="ice"></$GlobalCircle> Ice, <$GlobalCircle className="electric"></$GlobalCircle> Electric, <$GlobalCircle className="noAffinity"></$GlobalCircle> No Affinity
      </$GameplayCardAffinity>
      <$GameplayCardAffinity>
        <strong>Affinities Combos</strong>: <$GlobalCircle className="wind"></$GlobalCircle> & <$GlobalCircle className="water"></$GlobalCircle>, <$GlobalCircle className="darkness"></$GlobalCircle> & <$GlobalCircle className="ice"></$GlobalCircle>, <$GlobalCircle className="arcane"></$GlobalCircle> & <$GlobalCircle className="fire"></$GlobalCircle>
      </$GameplayCardAffinity>
      <$GameplayCardWrapper>
        <div>
          <$GameplayCardHeader>Regular Season</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Weeks 1 - 9</$GameplayCardTitle>
          </$GameplayCardSection>
        </div>
        <div>
          <$GameplayCardHeader>Playoffs (first round)</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 10</$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardHeader>Semi-Finals (second round)</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 11</$GameplayCardTitle>
          </$GameplayCardSection>
          <$GameplayCardHeader>Finals</$GameplayCardHeader>
          <$GameplayCardSection className="indent">
            <$GameplayCardTitle className="bold">Week 12</$GameplayCardTitle>
          </$GameplayCardSection>
        </div>
      </$GameplayCardWrapper>
    </$GameplayCardContainer>
  );
};

export default Affinities;
