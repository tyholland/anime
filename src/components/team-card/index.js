import React, { useState } from 'react';
import {
  $TeamCardSection,
  $TeamCardPosition,
  $TeamCardCharacter,
  $TeamCardAffinity,
  $TeamCardPower,
  $TeamCardCharacterTxt,
  $TeamCardDuoSpace,
  $TeamCardCharacterWrapper,
  $TeamCardCharacterHeader,
  $TeamCardNameAffinity,
} from './teamCard.style.js';
import { $GlobalCircle } from 'Styles/global.style.js';
import CharacterStats from 'src/modals/character-stats/index.js';
import Button from 'Components/button/index.js';
import BioReview from 'src/modals/bio-review/index.js';

const TeamCard = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bioModalIsOpen, setBioModalIsOpen] = useState(false);
  const [characterId, setCharacterId] = useState(null);
  const [characterStats, setCharacterStats] = useState(null);
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
          <$TeamCardNameAffinity>
            <$TeamCardCharacterWrapper>
              <$TeamCardCharacter className="noLink">
                <$TeamCardCharacterTxt noCharacter={true}>
                  -
                </$TeamCardCharacterTxt>
              </$TeamCardCharacter>
            </$TeamCardCharacterWrapper>
            <$TeamCardAffinity className="affinity">-</$TeamCardAffinity>
          </$TeamCardNameAffinity>
          <$TeamCardPower>-</$TeamCardPower>
        </>
      );
    }

    return (
      <>
        <$TeamCardNameAffinity>
          <$TeamCardCharacterWrapper>
            <$TeamCardCharacter onClick={() => getProfile(character.id)}>
              <$TeamCardCharacterTxt>{character.name}</$TeamCardCharacterTxt>
            </$TeamCardCharacter>
          </$TeamCardCharacterWrapper>
          <$TeamCardAffinity className="affinity">
            {!!character.affinity.length &&
              character.affinity.map((item) => {
                return (
                  <$GlobalCircle
                    key={item.type}
                    className={`team ${item.type}`}
                    title={
                      item.type === 'noAffinity' ? 'no affinity' : item.type
                    }
                  ></$GlobalCircle>
                );
              })}
            {!character.affinity.length && <span>-</span>}
          </$TeamCardAffinity>
        </$TeamCardNameAffinity>
        <$TeamCardPower>
          <Button
            btnText={character.teamPoints === 0 ? 'Bye' : character.teamPoints}
            customBtnClass="text edit"
            btnFunction={() => toggleModal(character)}
          />
        </$TeamCardPower>
      </>
    );
  };

  const characterDouLink = (brawler, support) => {
    if (!brawler.id && !!support.id) {
      return (
        <>
          <$TeamCardNameAffinity className="duo">
            <div className="section">
              <$TeamCardCharacterWrapper className="duo">
                <$TeamCardCharacter className="noLink">
                  <$TeamCardDuoSpace className="text noLink">
                    -
                  </$TeamCardDuoSpace>
                </$TeamCardCharacter>
              </$TeamCardCharacterWrapper>
              <$TeamCardDuoSpace className="duo noLink">-</$TeamCardDuoSpace>
            </div>
            <div className="section">
              <$TeamCardCharacterWrapper className="duo">
                <$TeamCardCharacter onClick={() => getProfile(support.id)}>
                  <$TeamCardDuoSpace className="text">
                    {support.name}
                  </$TeamCardDuoSpace>
                </$TeamCardCharacter>
              </$TeamCardCharacterWrapper>
              <$TeamCardDuoSpace className="duo">
                {!!support.affinity.length &&
                  support.affinity.map((item) => {
                    return (
                      <$GlobalCircle
                        key={item.type}
                        className={`team ${item.type}`}
                        title={
                          item.type === 'noAffinity' ? 'no affinity' : item.type
                        }
                      ></$GlobalCircle>
                    );
                  })}
                {!support.affinity.length && <span>-</span>}
              </$TeamCardDuoSpace>
            </div>
          </$TeamCardNameAffinity>
          <$TeamCardPower className="duo">
            <$TeamCardDuoSpace className="right noLink points">
              -
            </$TeamCardDuoSpace>
            <$TeamCardDuoSpace className="right points">
              <Button
                btnText={support.teamPoints === 0 ? 'Bye' : support.teamPoints}
                customBtnClass="text edit"
                btnFunction={() => toggleModal(support)}
              />
            </$TeamCardDuoSpace>
          </$TeamCardPower>
        </>
      );
    }

    if (!support.id && !!brawler.id) {
      return (
        <>
          <$TeamCardNameAffinity className="duo">
            <div className="section">
              <$TeamCardCharacterWrapper className="duo">
                <$TeamCardCharacter onClick={() => getProfile(brawler.id)}>
                  <$TeamCardDuoSpace className="text">
                    {brawler.name}
                  </$TeamCardDuoSpace>
                </$TeamCardCharacter>
              </$TeamCardCharacterWrapper>
              <$TeamCardDuoSpace className="duo">
                {!!brawler.affinity.length &&
                  brawler.affinity.map((item) => {
                    return (
                      <$GlobalCircle
                        key={item.type}
                        className={`team ${item.type}`}
                        title={
                          item.type === 'noAffinity' ? 'no affinity' : item.type
                        }
                      ></$GlobalCircle>
                    );
                  })}
                {!brawler.affinity.length && <span>-</span>}
              </$TeamCardDuoSpace>
            </div>
            <div className="section">
              <$TeamCardCharacterWrapper className="duo">
                <$TeamCardCharacter className="noLink">
                  <$TeamCardDuoSpace className="text noLink">
                    -
                  </$TeamCardDuoSpace>
                </$TeamCardCharacter>
              </$TeamCardCharacterWrapper>
              <$TeamCardDuoSpace className="duo noLink">-</$TeamCardDuoSpace>
            </div>
          </$TeamCardNameAffinity>
          <$TeamCardPower className="duo">
            <$TeamCardDuoSpace className="right points">
              <Button
                btnText={brawler.teamPoints === 0 ? 'Bye' : brawler.teamPoints}
                customBtnClass="text edit"
                btnFunction={() => toggleModal(brawler)}
              />
            </$TeamCardDuoSpace>
            <$TeamCardDuoSpace className="right noLink points">
              -
            </$TeamCardDuoSpace>
          </$TeamCardPower>
        </>
      );
    }

    if (!support.id && !brawler.id) {
      return (
        <>
          <$TeamCardNameAffinity className="duo">
            <div className="section">
              <$TeamCardCharacterWrapper className="duo">
                <$TeamCardCharacter onClick={() => getProfile(brawler.id)}>
                  <$TeamCardDuoSpace className="text noLink">
                    -
                  </$TeamCardDuoSpace>
                </$TeamCardCharacter>
              </$TeamCardCharacterWrapper>
              <$TeamCardDuoSpace className="duo noLink">-</$TeamCardDuoSpace>
            </div>
            <div className="section">
              <$TeamCardCharacterWrapper className="duo">
                <$TeamCardCharacter className="noLink">
                  <$TeamCardDuoSpace className="text noLink">
                    -
                  </$TeamCardDuoSpace>
                </$TeamCardCharacter>
              </$TeamCardCharacterWrapper>
              <$TeamCardDuoSpace className="duo noLink">-</$TeamCardDuoSpace>
            </div>
          </$TeamCardNameAffinity>
          <$TeamCardPower className="duo">
            <$TeamCardDuoSpace className="right noLink points">
              -
            </$TeamCardDuoSpace>
            <$TeamCardDuoSpace className="right noLink points">
              -
            </$TeamCardDuoSpace>
          </$TeamCardPower>
        </>
      );
    }

    return (
      <>
        <$TeamCardNameAffinity className="duo">
          <div className="section">
            <$TeamCardCharacterWrapper className="duo">
              <$TeamCardCharacter onClick={() => getProfile(brawler.id)}>
                <$TeamCardDuoSpace className="text">
                  {brawler.name}
                </$TeamCardDuoSpace>
              </$TeamCardCharacter>
            </$TeamCardCharacterWrapper>
            <$TeamCardDuoSpace className="duo">
              {!!brawler.affinity.length &&
                brawler.affinity.map((item) => {
                  return (
                    <$GlobalCircle
                      key={item.type}
                      className={`team ${item.type}`}
                      title={
                        item.type === 'noAffinity' ? 'no affinity' : item.type
                      }
                    ></$GlobalCircle>
                  );
                })}
              {!brawler.affinity.length && <span>-</span>}
            </$TeamCardDuoSpace>
          </div>
          <div className="section">
            <$TeamCardCharacterWrapper className="duo">
              <$TeamCardCharacter onClick={() => getProfile(support.id)}>
                <$TeamCardDuoSpace className="text">
                  {support.name}
                </$TeamCardDuoSpace>
              </$TeamCardCharacter>
            </$TeamCardCharacterWrapper>
            <$TeamCardDuoSpace className="duo">
              {!!support.affinity.length &&
                support.affinity.map((item) => {
                  return (
                    <$GlobalCircle
                      key={item.type}
                      className={`team ${item.type}`}
                      title={
                        item.type === 'noAffinity' ? 'no affinity' : item.type
                      }
                    ></$GlobalCircle>
                  );
                })}
              {!support.affinity.length && <span>-</span>}
            </$TeamCardDuoSpace>
          </div>
        </$TeamCardNameAffinity>
        <$TeamCardPower className="duo">
          <$TeamCardDuoSpace className="right points">
            <Button
              btnText={brawler.teamPoints === 0 ? 'Bye' : brawler.teamPoints}
              customBtnClass="text edit"
              btnFunction={() => toggleModal(brawler)}
            />
          </$TeamCardDuoSpace>
          <$TeamCardDuoSpace className="right points">
            <Button
              btnText={support.teamPoints === 0 ? 'Bye' : support.teamPoints}
              customBtnClass="text edit"
              btnFunction={() => toggleModal(support)}
            />
          </$TeamCardDuoSpace>
        </$TeamCardPower>
      </>
    );
  };

  return (
    <>
      <$TeamCardSection className="header">
        <$TeamCardPosition className="none"></$TeamCardPosition>
        <$TeamCardCharacterHeader>Starters</$TeamCardCharacterHeader>
        <$TeamCardAffinity>Affinity</$TeamCardAffinity>
        <$TeamCardPower>Points</$TeamCardPower>
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{'C'}</$TeamCardPosition>
        {characterLink(captain)}
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{'B'}</$TeamCardPosition>
        {characterLink(brawler_a)}
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{'B'}</$TeamCardPosition>
        {characterLink(brawler_b)}
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition className="duo">B/S</$TeamCardPosition>
        {characterDouLink(bs_brawler, bs_support)}
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{'S'}</$TeamCardPosition>
        {characterLink(support)}
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{'V'}</$TeamCardPosition>
        {characterLink(villain)}
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>BF</$TeamCardPosition>
        {characterLink(battlefield)}
      </$TeamCardSection>
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
