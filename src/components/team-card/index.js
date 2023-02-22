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
  $TeamCardNameAffinity,
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
          <$TeamCardNameAffinity>
            <$TeamCardCharacterWrapper>
              <$TeamCardCharacter className="noLink">
                <$TeamCardCharacterTxt>-</$TeamCardCharacterTxt>
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
            <Link href={`/bio?character=${character.id}`}>
              <$TeamCardCharacter>
                <$TeamCardCharacterTxt>{character.name}</$TeamCardCharacterTxt>
              </$TeamCardCharacter>
            </Link>
          </$TeamCardCharacterWrapper>
          <$TeamCardAffinity className="affinity">
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
        </$TeamCardNameAffinity>
        <$TeamCardPower>{character.teamPoints}</$TeamCardPower>
      </>
    );
  };

  const characterDouLink = (brawler, support) => {
    if (!brawler.id && !support.id) {
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
              <$TeamCardAffinity className="duo">
                <$TeamCardDuoSpace className="noLink">-</$TeamCardDuoSpace>
              </$TeamCardAffinity>
            </div>
            <div className="section">
              <$TeamCardCharacterWrapper className="duo">
                <$TeamCardCharacter className="noLink">
                  <$TeamCardDuoSpace className="text noLink">
                    -
                  </$TeamCardDuoSpace>
                </$TeamCardCharacter>
              </$TeamCardCharacterWrapper>
              <$TeamCardAffinity className="duo">
                <$TeamCardDuoSpace className="noLink">-</$TeamCardDuoSpace>
              </$TeamCardAffinity>
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
              <Link href={`/bio?character=${brawler.id}`}>
                <$TeamCardCharacter>
                  <$TeamCardDuoSpace className="text">
                    {brawler.name}
                  </$TeamCardDuoSpace>
                </$TeamCardCharacter>
              </Link>
            </$TeamCardCharacterWrapper>
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
          </div>
          <div className="section">
            <$TeamCardCharacterWrapper className="duo">
              <Link href={`/bio?character=${support.id}`}>
                <$TeamCardCharacter>
                  <$TeamCardDuoSpace className="text">
                    {support.name}
                  </$TeamCardDuoSpace>
                </$TeamCardCharacter>
              </Link>
            </$TeamCardCharacterWrapper>
            <$TeamCardAffinity className="duo">
              <$TeamCardDuoSpace>
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
          </div>
        </$TeamCardNameAffinity>
        <$TeamCardPower className="duo">
          <$TeamCardDuoSpace className="right points">
            {brawler.teamPoints}
          </$TeamCardDuoSpace>
          <$TeamCardDuoSpace className="right points">
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
