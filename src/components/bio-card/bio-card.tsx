import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './bioCard.style';
import { getPlayer } from 'Requests/player';
import Error from 'PageComponents/error/error';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import Loader from 'Components/loader/loader';
import Collapsible from 'react-collapsible';
import { BioCardProps } from 'Utils/types';

const BioCard = ({ characterId }: BioCardProps) => {
  const [player, setPlayer] = useState<Record<string, any> | null>(null);
  const [affinities, setAffinities] = useState<Record<string, any> | null>(null);
  const [errorPage, setErrorPage] = useState<boolean>(false);

  const handlePlayerInfo = async () => {
    try {
      const character = await getPlayer(characterId);

      const {
        fire,
        water,
        wind,
        earth,
        arcane,
        electric,
        celestial,
        darkness,
        ice,
        no_affinity,
      } = character[0];
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
          type: 'Celestial',
          class: 'celestial',
          value: celestial,
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
      const affinity = affinitiesTypes.filter((item: Record<string, any>) => {
        if (!!item.value && item.value > 0) {
          return item;
        }
      });

      setPlayer(character[0]);
      setAffinities(affinity);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to load character'));
      setErrorPage(true);
    }
  };

  const infoUp = (
    <div className="collapseContainer">
      <div>Additional Info</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const infoDown = (
    <div className="collapseContainer">
      <div>Additional Info</div>
      <div className="down">&#10132;</div>
    </div>
  );

  useEffect(() => {
    if (characterId) {
      handlePlayerInfo();
    }
  }, [characterId]);

  if (errorPage) {
    return <Error />;
  }

  if (!player) {
    return <Loader />;
  }

  return (
    <>
      <GlobalStyles.CollapsibleStyles />
      <Styles.BioWrapper>
        <div>
          <Styles.BioImage src={player.image_url} alt={player.full_name} />
          <Styles.BioTitle>{player.full_name}</Styles.BioTitle>
          <Styles.BioSubTitle>
            Anime Series: <span>{player.series}</span>
          </Styles.BioSubTitle>
          <Styles.BioAttribute>Rank:</Styles.BioAttribute>
          <Styles.BioSubAttribute>{player.category}</Styles.BioSubAttribute>
          <Styles.BioAttribute>Points (cost to add):</Styles.BioAttribute>
          <Styles.BioSubAttribute>{player.cost}</Styles.BioSubAttribute>
          <Styles.BioAttribute>Bye Week:</Styles.BioAttribute>
          <Styles.BioSubAttribute>{player.bye_week}</Styles.BioSubAttribute>
        </div>
        <div>
          <Styles.BioAttribute>Power Level:</Styles.BioAttribute>
          <Styles.BioSubAttribute>{player.power_level}</Styles.BioSubAttribute>
          {player.category !== 'Battlefield' && !!affinities?.length && (
            <>
              <Styles.BioAttribute>Element Affinity:</Styles.BioAttribute>
              <Styles.BioAffinity className="down">
                {affinities?.map((item: Record<string, any>) => (
                  <Styles.BioAffinity className="right" key={item.type}>
                    <GlobalStyles.GlobalCircle className={item.class}></GlobalStyles.GlobalCircle>
                    <Styles.BioAffinityText>{item.type}</Styles.BioAffinityText>
                  </Styles.BioAffinity>
                ))}
              </Styles.BioAffinity>
            </>
          )}
          {!(!player.weakness || player.weakness === 'None') && (
            <>
              <Styles.BioAttribute>Element Weakness:</Styles.BioAttribute>
              <Styles.BioAffinity className="last">
                <Styles.BioAffinity>
                  <GlobalStyles.GlobalCircle
                    className={player.weakness.toLowerCase()}
                  ></GlobalStyles.GlobalCircle>
                  <Styles.BioAffinityText>{player.weakness}</Styles.BioAffinityText>
                </Styles.BioAffinity>
              </Styles.BioAffinity>
            </>
          )}
          {player.category === 'Villain' && !!affinities?.length && (
            <>
              <Styles.BioAttribute>Damage %:</Styles.BioAttribute>
              <Styles.BioAffinity className="down">
                {affinities?.map((item: Record<string, any>) => (
                  <Styles.BioAffinity className="right" key={item.type}>
                    <GlobalStyles.GlobalCircle className={item.class}></GlobalStyles.GlobalCircle>
                    <Styles.BioAffinityText className="percent">{item.value}%</Styles.BioAffinityText>
                  </Styles.BioAffinity>
                ))}
              </Styles.BioAffinity>
              <Styles.BioAccordian>
                <Collapsible
                  trigger={infoDown}
                  triggerWhenOpen={infoUp}
                  triggerTagName="div"
                  containerElementProps={{ content: 'bio' }}
                  triggerElementProps={{ id: 'villainAccordion', 'aria-controls': 'villainAccordion' }} contentElementId="villainAccordion"
                >
                  Damage is given to characters that have at least one of these
                  affinities as a weakness. If the affinity is "No Affinity",
                  then the damage is given to all characters.
                </Collapsible>
              </Styles.BioAccordian>
            </>
          )}
          {player.category === 'Villain' && !affinities?.length && (
            <>
              <Styles.BioAttribute>Damage %:</Styles.BioAttribute>
              <Styles.BioSubAttribute>No Damage is given.</Styles.BioSubAttribute>
            </>
          )}
          {player.category === 'Support' && !!affinities?.length && (
            <>
              <Styles.BioAttribute>Boost %:</Styles.BioAttribute>
              <Styles.BioAffinity className="down">
                {affinities?.map((item: Record<string, any>) => (
                  <Styles.BioAffinity className="right" key={item.type}>
                    <GlobalStyles.GlobalCircle className={item.class}></GlobalStyles.GlobalCircle>
                    <Styles.BioAffinityText className="percent">{item.value}%</Styles.BioAffinityText>
                  </Styles.BioAffinity>
                ))}
              </Styles.BioAffinity>
              <Styles.BioAccordian>
                <Collapsible
                  trigger={infoDown}
                  triggerWhenOpen={infoUp}
                  triggerTagName="div"
                  containerElementProps={{ content: 'bio' }}
                  triggerElementProps={{ id: 'supportAccordion', 'aria-controls': 'supportAccordion' }} contentElementId="supportAccordion"
                >
                  Boost is given to characters that have one or all of these
                  affinities.
                </Collapsible>
              </Styles.BioAccordian>
            </>
          )}
          {player.category === 'Support' && !affinities?.length && (
            <>
              <Styles.BioAttribute>Boost %:</Styles.BioAttribute>
              <Styles.BioSubAttribute>No Boost is given.</Styles.BioSubAttribute>
            </>
          )}
          {player.category === 'Battlefield' && (
            <>
              <Styles.BioAttribute>Team Boost and Enemy Team Damage %:</Styles.BioAttribute>
              <Styles.BioAffinity className="down">
                {affinities?.map((item: Record<string, any>) => (
                  <Styles.BioAffinity className="right" key={item.type}>
                    <GlobalStyles.GlobalCircle className={item.class}></GlobalStyles.GlobalCircle>
                    <Styles.BioAffinityText>{item.type}:</Styles.BioAffinityText>
                    <Styles.BioAffinityText className="percent">{item.value}%</Styles.BioAffinityText>
                  </Styles.BioAffinity>
                ))}
              </Styles.BioAffinity>
              <Styles.BioAccordian>
                <Collapsible
                  trigger={infoDown}
                  triggerWhenOpen={infoUp}
                  triggerTagName="div"
                  containerElementProps={{ content: 'bio' }}
                  triggerElementProps={{ id: 'battlefieldAccordion', 'aria-controls': 'battlefieldAccordion' }} contentElementId="battlefieldAccordion"
                >
                  <p>
                    Boost is given to characters that have one or all of these
                    affinities.
                  </p>
                  <p>
                    Damage is given to characters that have at least one of
                    these affinities as a weakness. If the affinity is "No
                    Affinity", then the damage is given to all characters.
                  </p>
                </Collapsible>
              </Styles.BioAccordian>
            </>
          )}
        </div>
      </Styles.BioWrapper>
    </>
  );
};

export default BioCard;
