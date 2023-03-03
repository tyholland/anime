import React, { useEffect, useState } from 'react';
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
import Metadata from 'Components/metadata';
import { getPlayer } from 'src/requests/player';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import Loader from 'Components/loader';
import ReadMore from 'Components/read-more';

const Bio = () => {
  const router = useRouter();
  const [player, setPlayer] = useState(null);
  const [affinities, setAffinities] = useState(null);
  const [isFighter, setIsFighter] = useState(null);
  const [errorPage, setErrorPage] = useState(false);

  const handlePlayerInfo = async () => {
    const { query } = router;

    try {
      const character = await getPlayer(query.character);

      const {
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
        no_affinity,
      } = character[0];
      const isVillain = category === 'Villain';
      const isBattlefield = category === 'Battlefield';
      const isSupport = category === 'Support';
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
      const affinity = affinitiesTypes.filter((item) => {
        if (!!item.value && item.value > 0) {
          return item;
        }
      });

      setPlayer(character[0]);
      setIsFighter(!isVillain && !isBattlefield && !isSupport);
      setAffinities(affinity);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to load character'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length) {
      handlePlayerInfo();
    }
  }, [router.query]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Character Bio"
        description={
          'Profile for each individual character. Lists all their affinities, weaknesses, and series.'
        }
      />
      <BackLink />
      <$GlobalContainer>
        {!player && <Loader />}
        {player && (
          <$BioWrapper>
            <div>
              <$BioImage src={player.image_url} alt={player.full_name} />
              <$BioTitle>{player.full_name}</$BioTitle>
              <$BioSubTitle>
                Anime Series: <span>{player.series}</span>
              </$BioSubTitle>
            </div>
            <div>
              <$BioAttribute>Rank:</$BioAttribute>
              <$BioSubAttribute>{player.category}</$BioSubAttribute>
              <$BioAttribute>Power Level:</$BioAttribute>
              <$BioSubAttribute>{player.power_level}</$BioSubAttribute>
              {isFighter && (
                <>
                  <$BioAttribute>Element Affinity:</$BioAttribute>
                  <$BioAffinity className="down">
                    {affinities?.map((item) => (
                      <$BioAffinity className="right" key={item.type}>
                        <$GlobalCircle className={item.class}></$GlobalCircle>
                        <$BioAffinityText>{item.type}</$BioAffinityText>
                      </$BioAffinity>
                    ))}
                  </$BioAffinity>
                </>
              )}
              {!(!player.weakness || player.weakness === 'None') && (
                <>
                  <$BioAttribute>Element Weakness:</$BioAttribute>
                  <$BioAffinity className="last">
                    <$BioAffinity>
                      <$GlobalCircle
                        className={player.weakness.toLowerCase()}
                      ></$GlobalCircle>
                      <$BioAffinityText>{player.weakness}</$BioAffinityText>
                    </$BioAffinity>
                  </$BioAffinity>
                </>
              )}
              {player.category === 'Villain' && !!affinities?.length && (
                <>
                  <$BioAttribute>Element Affinity:</$BioAttribute>
                  <$BioAffinity className="down">
                    {affinities?.map((item) => (
                      <$BioAffinity className="right" key={item.type}>
                        <$GlobalCircle className={item.class}></$GlobalCircle>
                        <$BioAffinityText>{item.type}</$BioAffinityText>
                      </$BioAffinity>
                    ))}
                  </$BioAffinity>
                  <div>
                    Damage is given to characters that have at least one of
                    these affinities as a weakness.
                  </div>
                </>
              )}
              {player.category === 'Support' && !!affinities?.length && (
                <>
                  <$BioAttribute>Element Affinity:</$BioAttribute>
                  <$BioAffinity className="down">
                    {affinities?.map((item) => (
                      <$BioAffinity className="right" key={item.type}>
                        <$GlobalCircle className={item.class}></$GlobalCircle>
                        <$BioAffinityText>{item.type}</$BioAffinityText>
                      </$BioAffinity>
                    ))}
                  </$BioAffinity>
                  <div>
                    Boost is given to characters that have one or all of these
                    affinities.
                  </div>
                </>
              )}
              {player.category === 'Battlefield' && (
                <>
                  <$BioAttribute>Gives boost to:</$BioAttribute>
                  <$BioAffinity className="down">
                    {affinities?.map((item) => (
                      <$BioAffinity className="right" key={item.type}>
                        <$GlobalCircle className={item.class}></$GlobalCircle>
                        <$BioAffinityText>{item.type}</$BioAffinityText>
                      </$BioAffinity>
                    ))}
                  </$BioAffinity>
                  <div>
                    Damage is given to characters that have at least one of
                    these affinities as a weakness.
                  </div>
                </>
              )}
            </div>
          </$BioWrapper>
        )}
        <ReadMore />
      </$GlobalContainer>
    </>
  );
};

export default Bio;
