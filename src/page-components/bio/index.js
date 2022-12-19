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
  $BioWrapper
} from './bio.style';

const Bio = ({ player }) => {
  const { full_name, series, category, fire, water, wind, earth, arcane, electric, celestrial, darkness, ice, power_level, weakness, image_url } = player[0];

  const noWeakness = !weakness || weakness === 'None';

  const affinitiesTypes = [
    {
      type: 'Fire',
      value: fire,
    },
    {
      type: 'Water',
      value: water,
    },
    {
      type: 'Wind',
      value: wind,
    },
    {
      type: 'Earth',
      value: earth,
    },
    {
      type: 'Arcane',
      value: arcane,
    },
    {
      type: 'Electric',
      value: electric,
    },
    {
      type: 'Celestrial',
      value: celestrial,
    },
    {
      type: 'Darkness',
      value: darkness,
    },
    {
      type: 'Ice',
      value: ice,
    }
  ];

  const affinities = affinitiesTypes.filter(item => {
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
            <$BioTitle>{ full_name }</$BioTitle>
            <$BioSubTitle>Anime Series: <span>{ series }</span></$BioSubTitle>
          </div>
          <div>
            <$BioAttribute>Rank:</$BioAttribute>
            <$BioSubAttribute>{ category }</$BioSubAttribute>
            <$BioAttribute>Power Level:</$BioAttribute>
            <$BioSubAttribute>{ power_level }</$BioSubAttribute>
            { !!affinities.length && (
              <>
                <$BioAttribute>Element Affinity:</$BioAttribute>
                <$BioAffinity className="down">
                  { affinities.map(item => (
                    <$BioAffinity className="right" key={item.type}>
                      <$GlobalCircle className={item.type.toLowerCase()}></$GlobalCircle>
                      <$BioAffinityText>{item.type}</$BioAffinityText>
                    </$BioAffinity>
                  ))}
                </$BioAffinity>
              </>
            )}
            { !noWeakness && (
              <>
                <$BioAttribute>Element Weakness:</$BioAttribute>
                <$BioAffinity className="last">
                  <$BioAffinity>
                    <$GlobalCircle className={weakness.toLowerCase()}></$GlobalCircle>
                    <$BioAffinityText>{weakness}</$BioAffinityText>
                  </$BioAffinity>
                </$BioAffinity>
              </>
            )}
          </div>
        </$BioWrapper>
      </$GlobalContainer>
    </>
  );
};

export default Bio;
