import React, { useState } from 'react';
import * as Styles from './teamCard.style';
import * as GlobalStyles from 'Styles/global.style';
import CharacterStats from 'Modals/character-stats/character-stats';
import Button from 'Components/button/button';
import BioReview from 'Modals/bio-review/bio-review';
import { TeamCardProps } from 'Utils/types';

const TeamCard = ({ data }: TeamCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [bioModalIsOpen, setBioModalIsOpen] = useState<boolean>(false);
  const [characterId, setCharacterId] = useState<number | null>(null);
  const [characterStats, setCharacterStats] = useState<Record<string, any> | null>(null);
  const {
    captain,
    brawler_a,
    brawler_b,
    bs_brawler,
    bs_support,
    support,
    villain,
    battlefield,
  } = data;

  const toggleModal = (character: Record<string, any>) => {
    setIsModalOpen(!isModalOpen);
    setCharacterStats(character);
  };

  const getProfile = (id: number) => {
    setBioModalIsOpen(true);
    setCharacterId(id);
  };

  const closeModal = () => {
    setBioModalIsOpen(false);
  };

  const characterLink = (character: Record<string, any>) => {
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
              character.affinity.map((item: Record<string, any>) => {
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

  const characterDouLink = (brawler: Record<string, any>, support: Record<string, any>) => {
    if (!brawler.id && !!support.id) {
      return (
        <>
          <Styles.TeamCardNameAffinity className="duo">
            <div className="section">
              <Styles.TeamCardCharacterWrapper className="duo">
                <Styles.TeamCardCharacter className="noLink">
                  <Styles.TeamCardDuoSpace className="text noLink">
                    -
                  </Styles.TeamCardDuoSpace>
                </Styles.TeamCardCharacter>
              </Styles.TeamCardCharacterWrapper>
              <Styles.TeamCardDuoSpace className="duo noLink">-</Styles.TeamCardDuoSpace>
            </div>
            <div className="section">
              <Styles.TeamCardCharacterWrapper className="duo">
                <Styles.TeamCardCharacter onClick={() => getProfile(support.id)}>
                  <Styles.TeamCardDuoSpace className="text">
                    {support.name}
                  </Styles.TeamCardDuoSpace>
                </Styles.TeamCardCharacter>
              </Styles.TeamCardCharacterWrapper>
              <Styles.TeamCardDuoSpace className="duo">
                {!!support.affinity.length &&
                  support.affinity.map((item: Record<string, any>) => {
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
                {!support.affinity.length && <span>-</span>}
              </Styles.TeamCardDuoSpace>
            </div>
          </Styles.TeamCardNameAffinity>
          <Styles.TeamCardPower className="duo">
            <Styles.TeamCardDuoSpace className="right noLink points">
              -
            </Styles.TeamCardDuoSpace>
            <Styles.TeamCardDuoSpace className="right points">
              <Button
                btnText={support.teamPoints === 0 ? 'Bye' : support.teamPoints}
                customBtnClass="text edit"
                btnFunction={() => toggleModal(support)}
              />
            </Styles.TeamCardDuoSpace>
          </Styles.TeamCardPower>
        </>
      );
    }

    if (!support.id && !!brawler.id) {
      return (
        <>
          <Styles.TeamCardNameAffinity className="duo">
            <div className="section">
              <Styles.TeamCardCharacterWrapper className="duo">
                <Styles.TeamCardCharacter onClick={() => getProfile(brawler.id)}>
                  <Styles.TeamCardDuoSpace className="text">
                    {brawler.name}
                  </Styles.TeamCardDuoSpace>
                </Styles.TeamCardCharacter>
              </Styles.TeamCardCharacterWrapper>
              <Styles.TeamCardDuoSpace className="duo">
                {!!brawler.affinity.length &&
                  brawler.affinity.map((item: Record<string, any>) => {
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
                {!brawler.affinity.length && <span>-</span>}
              </Styles.TeamCardDuoSpace>
            </div>
            <div className="section">
              <Styles.TeamCardCharacterWrapper className="duo">
                <Styles.TeamCardCharacter className="noLink">
                  <Styles.TeamCardDuoSpace className="text noLink">
                    -
                  </Styles.TeamCardDuoSpace>
                </Styles.TeamCardCharacter>
              </Styles.TeamCardCharacterWrapper>
              <Styles.TeamCardDuoSpace className="duo noLink">-</Styles.TeamCardDuoSpace>
            </div>
          </Styles.TeamCardNameAffinity>
          <Styles.TeamCardPower className="duo">
            <Styles.TeamCardDuoSpace className="right points">
              <Button
                btnText={brawler.teamPoints === 0 ? 'Bye' : brawler.teamPoints}
                customBtnClass="text edit"
                btnFunction={() => toggleModal(brawler)}
              />
            </Styles.TeamCardDuoSpace>
            <Styles.TeamCardDuoSpace className="right noLink points">
              -
            </Styles.TeamCardDuoSpace>
          </Styles.TeamCardPower>
        </>
      );
    }

    if (!support.id && !brawler.id) {
      return (
        <>
          <Styles.TeamCardNameAffinity className="duo">
            <div className="section">
              <Styles.TeamCardCharacterWrapper className="duo">
                <Styles.TeamCardCharacter onClick={() => getProfile(brawler.id)}>
                  <Styles.TeamCardDuoSpace className="text noLink">
                    -
                  </Styles.TeamCardDuoSpace>
                </Styles.TeamCardCharacter>
              </Styles.TeamCardCharacterWrapper>
              <Styles.TeamCardDuoSpace className="duo noLink">-</Styles.TeamCardDuoSpace>
            </div>
            <div className="section">
              <Styles.TeamCardCharacterWrapper className="duo">
                <Styles.TeamCardCharacter className="noLink">
                  <Styles.TeamCardDuoSpace className="text noLink">
                    -
                  </Styles.TeamCardDuoSpace>
                </Styles.TeamCardCharacter>
              </Styles.TeamCardCharacterWrapper>
              <Styles.TeamCardDuoSpace className="duo noLink">-</Styles.TeamCardDuoSpace>
            </div>
          </Styles.TeamCardNameAffinity>
          <Styles.TeamCardPower className="duo">
            <Styles.TeamCardDuoSpace className="right noLink points">
              -
            </Styles.TeamCardDuoSpace>
            <Styles.TeamCardDuoSpace className="right noLink points">
              -
            </Styles.TeamCardDuoSpace>
          </Styles.TeamCardPower>
        </>
      );
    }

    return (
      <>
        <Styles.TeamCardNameAffinity className="duo">
          <div className="section">
            <Styles.TeamCardCharacterWrapper className="duo">
              <Styles.TeamCardCharacter onClick={() => getProfile(brawler.id)}>
                <Styles.TeamCardDuoSpace className="text">
                  {brawler.name}
                </Styles.TeamCardDuoSpace>
              </Styles.TeamCardCharacter>
            </Styles.TeamCardCharacterWrapper>
            <Styles.TeamCardDuoSpace className="duo">
              {!!brawler.affinity.length &&
                brawler.affinity.map((item: Record<string, any>) => {
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
              {!brawler.affinity.length && <span>-</span>}
            </Styles.TeamCardDuoSpace>
          </div>
          <div className="section">
            <Styles.TeamCardCharacterWrapper className="duo">
              <Styles.TeamCardCharacter onClick={() => getProfile(support.id)}>
                <Styles.TeamCardDuoSpace className="text">
                  {support.name}
                </Styles.TeamCardDuoSpace>
              </Styles.TeamCardCharacter>
            </Styles.TeamCardCharacterWrapper>
            <Styles.TeamCardDuoSpace className="duo">
              {!!support.affinity.length &&
                support.affinity.map((item: Record<string, any>) => {
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
              {!support.affinity.length && <span>-</span>}
            </Styles.TeamCardDuoSpace>
          </div>
        </Styles.TeamCardNameAffinity>
        <Styles.TeamCardPower className="duo">
          <Styles.TeamCardDuoSpace className="right points">
            <Button
              btnText={brawler.teamPoints === 0 ? 'Bye' : brawler.teamPoints}
              customBtnClass="text edit"
              btnFunction={() => toggleModal(brawler)}
            />
          </Styles.TeamCardDuoSpace>
          <Styles.TeamCardDuoSpace className="right points">
            <Button
              btnText={support.teamPoints === 0 ? 'Bye' : support.teamPoints}
              customBtnClass="text edit"
              btnFunction={() => toggleModal(support)}
            />
          </Styles.TeamCardDuoSpace>
        </Styles.TeamCardPower>
      </>
    );
  };

  return (
    <>
      <Styles.TeamCardSection className="header">
        <Styles.TeamCardPosition className="none"></Styles.TeamCardPosition>
        <Styles.TeamCardCharacterHeader>Starters</Styles.TeamCardCharacterHeader>
        <Styles.TeamCardAffinity>Affinity</Styles.TeamCardAffinity>
        <Styles.TeamCardPower>Points</Styles.TeamCardPower>
      </Styles.TeamCardSection>
      <Styles.TeamCardSection>
        <Styles.TeamCardPosition>{'C'}</Styles.TeamCardPosition>
        {characterLink(captain)}
      </Styles.TeamCardSection>
      <Styles.TeamCardSection>
        <Styles.TeamCardPosition>{'B'}</Styles.TeamCardPosition>
        {characterLink(brawler_a)}
      </Styles.TeamCardSection>
      <Styles.TeamCardSection>
        <Styles.TeamCardPosition>{'B'}</Styles.TeamCardPosition>
        {characterLink(brawler_b)}
      </Styles.TeamCardSection>
      <Styles.TeamCardSection>
        <Styles.TeamCardPosition className="duo">B/S</Styles.TeamCardPosition>
        {characterDouLink(bs_brawler, bs_support)}
      </Styles.TeamCardSection>
      <Styles.TeamCardSection>
        <Styles.TeamCardPosition>{'S'}</Styles.TeamCardPosition>
        {characterLink(support)}
      </Styles.TeamCardSection>
      <Styles.TeamCardSection>
        <Styles.TeamCardPosition>{'V'}</Styles.TeamCardPosition>
        {characterLink(villain)}
      </Styles.TeamCardSection>
      <Styles.TeamCardSection>
        <Styles.TeamCardPosition>BF</Styles.TeamCardPosition>
        {characterLink(battlefield)}
      </Styles.TeamCardSection>
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

export default TeamCard;
