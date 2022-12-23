import React from 'react';
import BackLink from 'Components/back-link';
import { $GlobalContainer, $GlobalCircle } from 'Styles/global.style.js';
import {
  $BioAffinity,
  $BioAffinityText,
  $BioTitle,
  $BioSubTitle,
  $BioAttribute,
  $BioSubAttribute,
  $BioImage,
  $BioWrapper,
} from './bio.style';

const Bio = ({ player }) => {
  const {
    full_name,
    series,
    category,
    fire,
    water,
    wind,
    earth,
    arcane,
    electric,
    celestrial,
    darkness,
    ice,
    power_level,
    weakness,
    image_url,
    power_loss,
    no_affinity,
  } = player[0];

  const noWeakness = !weakness || weakness === 'None';
  const isVillain = category === 'Villain';
  const isBattlefield = category === 'Battlefield';
  const isSupport = category === 'Support';
  const isFighter = !isVillain && !isBattlefield && !isSupport;

  const affinitiesTypes = [
    {
      type: 'Fire',
      class: 'fire',
      value: fire,
    },
    {
      type: 'Water',
      class: 'water',
      value: water,
    },
    {
      type: 'Wind',
      class: 'wind',
      value: wind,
    },
    {
      type: 'Earth',
      class: 'earth',
      value: earth,
    },
    {
      type: 'Arcane',
      class: 'arcane',
      value: arcane,
    },
    {
      type: 'Electric',
      class: 'electric',
      value: electric,
    },
    {
      type: 'Celestrial',
      class: 'celestrial',
      value: celestrial,
    },
    {
      type: 'Darkness',
      class: 'darkness',
      value: darkness,
    },
    {
      type: 'Ice',
      class: 'ice',
      value: ice,
    },
    {
      type: 'No Affinity',
      class: 'noAffinity',
      value: no_affinity,
    },
  ];

  const affinities = affinitiesTypes.filter((item) => {
    if (!!item.value && item.value > 0) {
      return item;
    }
  });

  return (
    <>
      <BackLink />
      <$GlobalContainer>
        <$BioWrapper>
          <div>
            <$BioImage src={image_url} alt={full_name} />
            <$BioTitle>{full_name}</$BioTitle>
            <$BioSubTitle>
              Anime Series: <span>{series}</span>
            </$BioSubTitle>
          </div>
          <div>
            <$BioAttribute>Rank:</$BioAttribute>
            <$BioSubAttribute>{category}</$BioSubAttribute>
            <$BioAttribute>Power Level:</$BioAttribute>
            <$BioSubAttribute>{power_level}</$BioSubAttribute>
            {isFighter && (
              <>
                <$BioAttribute>Element Affinity:</$BioAttribute>
                <$BioAffinity className="down">
                  {affinities.map((item) => (
                    <$BioAffinity className="right" key={item.type}>
                      <$GlobalCircle className={item.class}></$GlobalCircle>
                      <$BioAffinityText>{item.type}</$BioAffinityText>
                    </$BioAffinity>
                  ))}
                </$BioAffinity>
              </>
            )}
            {!noWeakness && (
              <>
                <$BioAttribute>Element Weakness:</$BioAttribute>
                <$BioAffinity className="last">
                  <$BioAffinity>
                    <$GlobalCircle
                      className={weakness.toLowerCase()}
                    ></$GlobalCircle>
                    <$BioAffinityText>{weakness}</$BioAffinityText>
                  </$BioAffinity>
                </$BioAffinity>
              </>
            )}
            {isVillain && (
              <>
                <$BioAttribute>
                  Damages Characters with these Element Affinities:
                </$BioAttribute>
                <$BioAffinity className="down">
                  {affinities.map((item) => (
                    <$BioAffinity className="right" key={item.type}>
                      <$GlobalCircle className={item.class}></$GlobalCircle>
                      <$BioAffinityText>{item.type}</$BioAffinityText>
                    </$BioAffinity>
                  ))}
                </$BioAffinity>
              </>
            )}
            {isSupport && !!affinities.length && (
              <>
                <$BioAttribute>
                  Boosts Characters with these Element Affinities:
                </$BioAttribute>
                <$BioAffinity className="down">
                  {affinities.map((item) => (
                    <$BioAffinity className="right" key={item.type}>
                      <$GlobalCircle className={item.class}></$GlobalCircle>
                      <$BioAffinityText>{item.type}</$BioAffinityText>
                    </$BioAffinity>
                  ))}
                </$BioAffinity>
              </>
            )}
            {isBattlefield && (
              <>
                <$BioAttribute>
                  Boosts Characters with these Element Affinities:
                </$BioAttribute>
                <$BioAffinity className="down">
                  {affinities.map((item) => (
                    <$BioAffinity className="right" key={item.type}>
                      <$GlobalCircle className={item.class}></$GlobalCircle>
                      <$BioAffinityText>{item.type}</$BioAffinityText>
                    </$BioAffinity>
                  ))}
                </$BioAffinity>
                {power_loss > 0 && (
                  <$BioAttribute>
                    Damages Characters with No Affinities
                  </$BioAttribute>
                )}
              </>
            )}
          </div>
        </$BioWrapper>
      </$GlobalContainer>
    </>
  );
};

export default Bio;
