import React, { useEffect, useState } from 'react';
import * as Styles from './benchCard.style.js';
import * as GlobalStyles from 'Styles/global.style.js';
import CharacterStats from 'src/modals/character-stats/index.js';
import Button from 'Components/button/index.js';
import BioReview from 'src/modals/bio-review/index.js';

const BenchCard = ({ data, size }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bioModalIsOpen, setBioModalIsOpen] = useState(false);
  const [characterId, setCharacterId] = useState(null);
  const [bench, setBench] = useState(0);
  const [characterStats, setCharacterStats] = useState(null);
  const {
    bench0,
    bench1,
    bench2,
    bench3,
  } = data;

  const toggleModal = (character) => {
    setIsModalOpen(!isModalOpen);
    setCharacterStats(character);
  };

  const getProfile = (id) => {
    setBioModalIsOpen(true);
    setCharacterId(id);
  };

  const closeModal = () => {
    setBioModalIsOpen(false);
  };

  const characterLink = (character) => {
    if (!character.id) {
      return (
        <>
          <Styles.TeamCardNameAffinity>
            <Styles.TeamCardCharacterWrapper>
              <Styles.TeamCardCharacter className="noLink">
                <Styles.TeamCardCharacterTxt noCharacter={true}>
                  -
                </Styles.TeamCardCharacterTxt>
              </Styles.TeamCardCharacter>
            </Styles.TeamCardCharacterWrapper>
            <Styles.TeamCardAffinity className="affinity">-</Styles.TeamCardAffinity>
          </Styles.TeamCardNameAffinity>
          <Styles.TeamCardPower>-</Styles.TeamCardPower>
        </>
      );
    }

    return (
      <>
        <Styles.TeamCardNameAffinity>
          <Styles.TeamCardCharacterWrapper>
            <Styles.TeamCardCharacter onClick={() => getProfile(character.id)}>
              <Styles.TeamCardCharacterTxt>{character.name}</Styles.TeamCardCharacterTxt>
            </Styles.TeamCardCharacter>
          </Styles.TeamCardCharacterWrapper>
          <Styles.TeamCardAffinity className="affinity">
            {!!character.affinity.length &&
              character.affinity.map((item) => {
                return (
                  <GlobalStyles.GlobalCircle
                    key={item.type}
                    className={`team ${item.type}`}
                    title={
                      item.type === 'noAffinity' ? 'no affinity' : item.type
                    }
                  ></GlobalStyles.GlobalCircle>
                );
              })}
            {!character.affinity.length && <span>-</span>}
          </Styles.TeamCardAffinity>
        </Styles.TeamCardNameAffinity>
        <Styles.TeamCardPower>
          <Button
            btnText={character.teamPoints === 0 ? 'Bye' : character.teamPoints}
            customBtnClass="text edit"
            btnFunction={() => toggleModal(character)}
          />
        </Styles.TeamCardPower>
      </>
    );
  };

  const handleBench = (benchSize) => {
    switch (benchSize) {
    case 0:
      return [];
    case 2:
      return [bench0, bench1];
    case 3:
      return [bench0, bench1, bench2];
    case 4:
      return [bench0, bench1, bench2, bench3];
    default:
      return [];
    }
  };

  useEffect(() => {
    setBench(size);
  }, [size]);

  return (
    <>
      <Styles.TeamCardSection className="header">
        <Styles.TeamCardPosition className="none"></Styles.TeamCardPosition>
        <Styles.TeamCardCharacterHeader>Bench</Styles.TeamCardCharacterHeader>
        <Styles.TeamCardAffinity>Affinity</Styles.TeamCardAffinity>
        <Styles.TeamCardPower>Points</Styles.TeamCardPower>
      </Styles.TeamCardSection>
      {handleBench(bench).map((player, index) => {
        return (
          <Styles.TeamCardSection key={index}>
            <Styles.TeamCardPosition>{'BN'}</Styles.TeamCardPosition>
            {characterLink(player)}
          </Styles.TeamCardSection>
        );
      })}
      <CharacterStats
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        character={characterStats}
        votes={[]}
        isMatchupPage={false}
      />
      <BioReview
        modalIsOpen={bioModalIsOpen}
        closeModal={closeModal}
        characterId={characterId}
      />
    </>
  );
};

export default BenchCard;