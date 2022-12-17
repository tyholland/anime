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
  $TeamCardCharacterWrapper,
  $TeamCardCharacterHeader,
} from './teamCard.style.js';
import { $GlobalCircle } from 'Styles/global.style.js';

const TeamCard = ({ type = 'default' }) => {
  const isBench = type === 'Bench';

  return (
    <>
      <$TeamCardSection className="header">
        <$TeamCardPosition className="none"></$TeamCardPosition>
        <$TeamCardCharacterHeader>{isBench ? type : 'Starters'}</$TeamCardCharacterHeader>
        <$TeamCardAffinity>Affinity</$TeamCardAffinity>
        <$TeamCardPower>Power Level</$TeamCardPower>
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{isBench ? 'BN' : 'C'}</$TeamCardPosition>
        <$TeamCardCharacterWrapper>
          <Link href="/bio/goku">
            <$TeamCardCharacter>
              <$TeamCardCharacterTxt>Goku</$TeamCardCharacterTxt>
            </$TeamCardCharacter>
          </Link>
        </$TeamCardCharacterWrapper>
        <$TeamCardAffinity>-</$TeamCardAffinity>
        <$TeamCardPower>1500</$TeamCardPower>
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{isBench ? 'BN' : 'B'}</$TeamCardPosition>
        <$TeamCardCharacterWrapper>
          <Link href="/bio/arthurboyle">
            <$TeamCardCharacter>
              <$TeamCardCharacterTxt>Arthur Boyle</$TeamCardCharacterTxt>
            </$TeamCardCharacter>
          </Link>
        </$TeamCardCharacterWrapper>
        <$TeamCardAffinity>
          <$GlobalCircle className="fire"></$GlobalCircle>
        </$TeamCardAffinity>
        <$TeamCardPower>1250</$TeamCardPower>
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{isBench ? 'BN' : 'B'}</$TeamCardPosition>
        <$TeamCardCharacterWrapper>
          <Link href="/bio/genos">
            <$TeamCardCharacter>
              <$TeamCardCharacterTxt>Genos</$TeamCardCharacterTxt>
            </$TeamCardCharacter>
          </Link>
        </$TeamCardCharacterWrapper>
        <$TeamCardAffinity>
          <$GlobalCircle className="fire"></$GlobalCircle>
        </$TeamCardAffinity>
        <$TeamCardPower>1250</$TeamCardPower>
      </$TeamCardSection>
      {!isBench && (
        <$TeamCardSection>
          <$TeamCardPosition className="duo">B/S</$TeamCardPosition>
          <$TeamCardCharacterWrapper className="duo">
            <Link href="/bio/rocklee">
              <$TeamCardCharacter>
                <$TeamCardDuoSpace className="text">Rock Lee</$TeamCardDuoSpace>
              </$TeamCardCharacter>
            </Link>
            <Link href="/bio/tenten">
              <$TeamCardCharacter>
                <$TeamCardDuoSpace className="text">Tenten</$TeamCardDuoSpace>
              </$TeamCardCharacter>
            </Link>
          </$TeamCardCharacterWrapper>
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
        <$TeamCardCharacterWrapper>
          <Link href="/bio/chad">
            <$TeamCardCharacter>
              <$TeamCardCharacterTxt>Chad</$TeamCardCharacterTxt>
            </$TeamCardCharacter>
          </Link>
        </$TeamCardCharacterWrapper>
        <$TeamCardAffinity>-</$TeamCardAffinity>
        <$TeamCardPower>1000</$TeamCardPower>
      </$TeamCardSection>
      <$TeamCardSection>
        <$TeamCardPosition>{isBench ? 'BN' : 'V'}</$TeamCardPosition>
        <$TeamCardCharacterWrapper>
          <Link href="/bio/sasori">
            <$TeamCardCharacter>
              <$TeamCardCharacterTxt>Sasori</$TeamCardCharacterTxt>
            </$TeamCardCharacter>
          </Link>
        </$TeamCardCharacterWrapper>
        <$TeamCardAffinity>-</$TeamCardAffinity>
        <$TeamCardPower>1250</$TeamCardPower>
      </$TeamCardSection>
      {!isBench && (
        <$TeamCardSection>
          <$TeamCardPosition>BF</$TeamCardPosition>
          <$TeamCardCharacterWrapper>
            <Link href="/bio/soulsociety">
              <$TeamCardCharacter>
                <$TeamCardCharacterTxt>Soul Society</$TeamCardCharacterTxt>
              </$TeamCardCharacter>
            </Link>
          </$TeamCardCharacterWrapper>
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
