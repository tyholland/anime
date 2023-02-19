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

const TeamCard = ({ data }) => {
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

  const characterLink = (character) => {
    if (!character.id) {
      return (
        <>
          <$TeamCardCharacterWrapper>
            <$TeamCardCharacter className="noLink">
              <$TeamCardCharacterTxt>-</$TeamCardCharacterTxt>
            </$TeamCardCharacter>
          </$TeamCardCharacterWrapper>
          <$TeamCardAffinity>-</$TeamCardAffinity>
          <$TeamCardPower>-</$TeamCardPower>
        </>
      );
    }

    return (
      <>
        <$TeamCardCharacterWrapper>
          <Link href={`/bio?character=${character.id}`}>
            <$TeamCardCharacter>
              <$TeamCardCharacterTxt>{character.name}</$TeamCardCharacterTxt>
            </$TeamCardCharacter>
          </Link>
        </$TeamCardCharacterWrapper>
        <$TeamCardAffinity>
          {!!character.affinity.length &&
            character.affinity.map((item) => {
              return (
                <$GlobalCircle
                  key={item.type}
                  className={`team ${item.type}`}
                ></$GlobalCircle>
              );
            })}
          {!character.affinity.length && <span>-</span>}
        </$TeamCardAffinity>
        <$TeamCardPower>{character.teamPoints}</$TeamCardPower>
      </>
    );
  };

  const characterDouLink = (brawler, support) => {
    if (!brawler.id && !support.id) {
      return (
        <>
          <$TeamCardCharacterWrapper className="duo">
            <$TeamCardCharacter className="noLink">
              <$TeamCardDuoSpace className="text noLink">-</$TeamCardDuoSpace>
            </$TeamCardCharacter>
            <$TeamCardCharacter className="noLink">
              <$TeamCardDuoSpace className="text noLink">-</$TeamCardDuoSpace>
            </$TeamCardCharacter>
          </$TeamCardCharacterWrapper>
          <$TeamCardAffinity className="duo">
            <$TeamCardDuoSpace className="noLink">-</$TeamCardDuoSpace>
            <$TeamCardDuoSpace className="noLink">-</$TeamCardDuoSpace>
          </$TeamCardAffinity>
          <$TeamCardPower>
            <$TeamCardDuoSpace className="right noLink">-</$TeamCardDuoSpace>
            <$TeamCardDuoSpace className="right noLink">-</$TeamCardDuoSpace>
          </$TeamCardPower>
        </>
      );
    }

    return (
      <>
        <$TeamCardCharacterWrapper className="duo">
          <Link href={`/bio?character=${brawler.id}`}>
            <$TeamCardCharacter>
              <$TeamCardDuoSpace className="text">
                {brawler.name}
              </$TeamCardDuoSpace>
            </$TeamCardCharacter>
          </Link>
          <Link href={`/bio?character=${support.id}`}>
            <$TeamCardCharacter>
              <$TeamCardDuoSpace className="text">
                {support.name}
              </$TeamCardDuoSpace>
            </$TeamCardCharacter>
          </Link>
        </$TeamCardCharacterWrapper>
        <$TeamCardAffinity className="duo">
          <$TeamCardDuoSpace className="duo">
            {!!brawler.affinity.length &&
              brawler.affinity.map((item) => {
                return (
                  <$GlobalCircle
                    key={item.type}
                    className={`team ${item.type}`}
                  ></$GlobalCircle>
                );
              })}
            {!brawler.affinity.length && <span>-</span>}
          </$TeamCardDuoSpace>
          <$TeamCardDuoSpace className="duo">
            {!!support.affinity.length &&
              support.affinity.map((item) => {
                return (
                  <$GlobalCircle
                    key={item.type}
                    className={`team ${item.type}`}
                  ></$GlobalCircle>
                );
              })}
            {!support.affinity.length && <span>-</span>}
          </$TeamCardDuoSpace>
        </$TeamCardAffinity>
        <$TeamCardPower>
          <$TeamCardDuoSpace className="right">
            {brawler.teamPoints}
          </$TeamCardDuoSpace>
          <$TeamCardDuoSpace className="right">
            {support.teamPoints}
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
    </>
  );
};

export default TeamCard;
