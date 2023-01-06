import CharacterStats from 'Components/character-stats';
import React, { useState } from 'react';
import {
  $MatchupColumn,
  $MatchupSection,
  $MatchupHeadliner,
  $MatchupCharacter,
  $MatchupAffinity,
  $MatchupPowerText,
  $MatchupPower,
} from './matchup.style.js';
import { $GlobalCircle } from 'Styles/global.style.js';

const MatchUp = ({ isReverse, team }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {
    captain,
    brawler_a,
    brawler_b,
    bs_brawler,
    bs_support,
    support,
    villain,
    battlefield,
  } = team;

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const getAffinities = (character) => {
    return (
      <$MatchupAffinity className={isReverse && 'reverse'}>
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
      </$MatchupAffinity>
    );
  };

  return (
    <$MatchupColumn>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            {captain.name}
          </$MatchupCharacter>
          {getAffinities(captain)}
        </$MatchupHeadliner>
        <$MatchupPower className={isReverse && 'reverse'} onClick={toggleModal}>
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {captain.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            {brawler_a.name}
          </$MatchupCharacter>
          {getAffinities(brawler_a)}
        </$MatchupHeadliner>
        <$MatchupPower className={isReverse && 'reverse'} onClick={toggleModal}>
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {brawler_a.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            {brawler_b.name}
          </$MatchupCharacter>
          {getAffinities(brawler_b)}
        </$MatchupHeadliner>
        <$MatchupPower className={isReverse && 'reverse'} onClick={toggleModal}>
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {brawler_b.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={`duo ${isReverse && 'reverse'}`}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            {bs_brawler.name}
          </$MatchupCharacter>
          {getAffinities(bs_brawler)}
        </$MatchupHeadliner>
        <$MatchupPower className={isReverse && 'reverse'} onClick={toggleModal}>
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {bs_brawler.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            {bs_support.name}
          </$MatchupCharacter>
          {getAffinities(bs_support)}
        </$MatchupHeadliner>
        <$MatchupPower className={isReverse && 'reverse'} onClick={toggleModal}>
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {bs_support.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            {support.name}
          </$MatchupCharacter>
          {getAffinities(support)}
        </$MatchupHeadliner>
        <$MatchupPower className={isReverse && 'reverse'} onClick={toggleModal}>
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {support.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            {villain.name}
          </$MatchupCharacter>
          {getAffinities(villain)}
        </$MatchupHeadliner>
        <$MatchupPower className={isReverse && 'reverse'} onClick={toggleModal}>
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {villain.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            {battlefield.name}
          </$MatchupCharacter>
          {getAffinities(battlefield)}
        </$MatchupHeadliner>
        <$MatchupPower className={isReverse && 'reverse'} onClick={toggleModal}>
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {battlefield.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <CharacterStats
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
      />
    </$MatchupColumn>
  );
};

export default MatchUp;
