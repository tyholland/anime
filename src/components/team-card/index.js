import Link from 'next/link.js';
import React from 'react';
import {
  $TeamCardSection,
  $TeamCardPosition,
  $TeamCardCharacter,
  $TeamCardAffinity,
  $TeamCardPower,
  $TeamCardCharacterTxt,
  $TeamCardDuoSpace,
} from './teamCard.style.js';
import { $GlobalCircle } from 'Styles/global.style.js';

const TeamCard = ({ type = 'default' }) => {
  const isBench = type === 'Bench';

  return (
    <>
      <$TeamCardSection className="header">
        <$TeamCardPosition className="none"></$TeamCardPosition>
        <$TeamCardCharacter>{isBench ? type : 'Starters'}</$TeamCardCharacter>
        <$TeamCardAffinity>Affinity</$TeamCardAffinity>
        <$TeamCardPower>Power Level</$TeamCardPower>
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{isBench ? 'BN' : 'C'}</$TeamCardPosition>
        <Link href="bio">
          <$TeamCardCharacter>
            <$TeamCardCharacterTxt>Goku</$TeamCardCharacterTxt>
          </$TeamCardCharacter>
        </Link>
        <$TeamCardAffinity>-</$TeamCardAffinity>
        <$TeamCardPower>1500</$TeamCardPower>
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{isBench ? 'BN' : 'B'}</$TeamCardPosition>
        <Link href="bio">
          <$TeamCardCharacter>
            <$TeamCardCharacterTxt>Arthur Boyle</$TeamCardCharacterTxt>
          </$TeamCardCharacter>
        </Link>
        <$TeamCardAffinity>
          <$GlobalCircle className="fire"></$GlobalCircle>
        </$TeamCardAffinity>
        <$TeamCardPower>1250</$TeamCardPower>
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{isBench ? 'BN' : 'B'}</$TeamCardPosition>
        <Link href="bio">
          <$TeamCardCharacter>
            <$TeamCardCharacterTxt>Genos</$TeamCardCharacterTxt>
          </$TeamCardCharacter>
        </Link>
        <$TeamCardAffinity>
          <$GlobalCircle className="fire"></$GlobalCircle>
        </$TeamCardAffinity>
        <$TeamCardPower>1250</$TeamCardPower>
      </$TeamCardSection>
      {!isBench && (
        <$TeamCardSection>
          <$TeamCardPosition className="duo">B/S</$TeamCardPosition>
          <$TeamCardCharacter>
            <Link href="bio">
              <$TeamCardDuoSpace className="text">Rock Lee</$TeamCardDuoSpace>
            </Link>
            <Link href="bio">
              <$TeamCardDuoSpace className="text">Tenten</$TeamCardDuoSpace>
            </Link>
          </$TeamCardCharacter>
          <$TeamCardAffinity>
            <$TeamCardDuoSpace>-</$TeamCardDuoSpace>
            <$TeamCardDuoSpace>-</$TeamCardDuoSpace>
          </$TeamCardAffinity>
          <$TeamCardPower>
            <$TeamCardDuoSpace className="right">1250</$TeamCardDuoSpace>
            <$TeamCardDuoSpace className="right">1000</$TeamCardDuoSpace>
          </$TeamCardPower>
        </$TeamCardSection>
      )}
      <$TeamCardSection>
        <$TeamCardPosition>{isBench ? 'BN' : 'S'}</$TeamCardPosition>
        <Link href="bio">
          <$TeamCardCharacter>
            <$TeamCardCharacterTxt>Chad</$TeamCardCharacterTxt>
          </$TeamCardCharacter>
        </Link>
        <$TeamCardAffinity>-</$TeamCardAffinity>
        <$TeamCardPower>1000</$TeamCardPower>
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{isBench ? 'BN' : 'V'}</$TeamCardPosition>
        <Link href="bio">
          <$TeamCardCharacter>
            <$TeamCardCharacterTxt>Sasori</$TeamCardCharacterTxt>
          </$TeamCardCharacter>
        </Link>
        <$TeamCardAffinity>-</$TeamCardAffinity>
        <$TeamCardPower>1250</$TeamCardPower>
      </$TeamCardSection>
      {!isBench && (
        <$TeamCardSection>
          <$TeamCardPosition>BF</$TeamCardPosition>
          <Link href="bio">
            <$TeamCardCharacter>
              <$TeamCardCharacterTxt>Soul Society</$TeamCardCharacterTxt>
            </$TeamCardCharacter>
          </Link>
          <$TeamCardAffinity>
            <$GlobalCircle className="arcane"></$GlobalCircle>
          </$TeamCardAffinity>
          <$TeamCardPower>-</$TeamCardPower>
        </$TeamCardSection>
      )}
    </>
  );
};

export default TeamCard;
