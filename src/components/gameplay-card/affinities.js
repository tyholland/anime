import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import { $GameplayCardSection, $GameplayCardTitle, $GameplayCardHeader } from './gameplayCard.style';

const Affinities = () => {
  return (
    <$GlobalContainer>
      <$GameplayCardSection>
        <$GameplayCardTitle className="bold">Week 1 - Fire</$GameplayCardTitle>
        <div>Power Boost: 250</div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle className="bold">Week 2 - Water</$GameplayCardTitle>
        <div>Power Boost: 300</div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle className="bold">Week 3 - Earth</$GameplayCardTitle>
        <div>Power Boost: 300</div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle className="bold">Week 4 - Wind</$GameplayCardTitle>
        <div>Power Boost: 250</div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle className="bold">Week 5 - Arcane</$GameplayCardTitle>
        <div>Power Boost: 200</div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle className="bold">Week 6 - Darkness</$GameplayCardTitle>
        <div>Power Boost: 250</div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle className="bold">Week 7 - Celestial</$GameplayCardTitle>
        <div>Power Boost: 300</div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle className="bold">Week 8 - Ice</$GameplayCardTitle>
        <div>Power Boost: 300</div>
      </$GameplayCardSection>
      <$GameplayCardSection>
        <$GameplayCardTitle className="bold">Week 9 - Electric</$GameplayCardTitle>
        <div>Power Boost: 250</div>
      </$GameplayCardSection>
      <$GameplayCardHeader>Playoffs</$GameplayCardHeader>
      <$GameplayCardSection className="indent">
        <$GameplayCardTitle className="bold">Week 10 - Hurricane</$GameplayCardTitle>
        <div>Wind Boost: 250</div>
        <div>Water Boost: 300</div>
      </$GameplayCardSection>
      <$GameplayCardHeader>Semi-Finals</$GameplayCardHeader>
      <$GameplayCardSection className="indent">
        <$GameplayCardTitle className="bold">Week 11 - ShadowFrost</$GameplayCardTitle>
        <div>Darkness Boost: 250</div>
        <div>Ice Boost: 300</div>
      </$GameplayCardSection>
      <$GameplayCardHeader>Finals</$GameplayCardHeader>
      <$GameplayCardSection className="indent">
        <$GameplayCardTitle className="bold">Week 12 - Mana Blaze</$GameplayCardTitle>
        <div>Arcane Boost: 200</div>
        <div>Fire Boost: 250</div>
      </$GameplayCardSection>
    </$GlobalContainer>
  );
};

export default Affinities;
