import CharacterStats from 'src/modals/character-stats';
import React, { useState } from 'react';
import {
  $MatchupColumn,
  $MatchupSection,
  $MatchupHeadliner,
  $MatchupAffinity,
  $MatchupPowerText,
  $MatchupPower,
  $MatchupCharacterBtn,
} from './matchup.style.js';
import { $GlobalCircle } from 'Styles/global.style.js';
import { useRouter } from 'next/router.js';

const MatchUp = ({ isReverse, team }) => {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
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
  } = team;

  const toggleModal = (character) => {
    setIsModalOpen(!isModalOpen);
    setCharacterStats(character);
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

  const getProfile = (id) => {
    router.push(`/bio/${id}`);
  };

  return (
    <$MatchupColumn>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacterBtn
            onClick={() => getProfile(captain.id)}
            className={isReverse && 'reverse'}
          >
            <span>{captain.name}</span>
          </$MatchupCharacterBtn>
          {getAffinities(captain)}
        </$MatchupHeadliner>
        <$MatchupPower
          className={isReverse && 'reverse'}
          onClick={() => toggleModal(captain)}
        >
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {captain.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacterBtn
            onClick={() => getProfile(brawler_a.id)}
            className={isReverse && 'reverse'}
          >
            <span>{brawler_a.name}</span>
          </$MatchupCharacterBtn>
          {getAffinities(brawler_a)}
        </$MatchupHeadliner>
        <$MatchupPower
          className={isReverse && 'reverse'}
          onClick={() => toggleModal(brawler_a)}
        >
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {brawler_a.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacterBtn
            onClick={() => getProfile(brawler_b.id)}
            className={isReverse && 'reverse'}
          >
            <span>{brawler_b.name}</span>
          </$MatchupCharacterBtn>
          {getAffinities(brawler_b)}
        </$MatchupHeadliner>
        <$MatchupPower
          className={isReverse && 'reverse'}
          onClick={() => toggleModal(brawler_b)}
        >
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {brawler_b.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={`duo ${isReverse && 'reverse'}`}>
        <$MatchupHeadliner>
          <$MatchupCharacterBtn
            onClick={() => getProfile(bs_brawler.id)}
            className={isReverse && 'reverse'}
          >
            <span>{bs_brawler.name}</span>
          </$MatchupCharacterBtn>
          {getAffinities(bs_brawler)}
        </$MatchupHeadliner>
        <$MatchupPower
          className={isReverse && 'reverse'}
          onClick={() => toggleModal(bs_brawler)}
        >
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {bs_brawler.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacterBtn
            onClick={() => getProfile(bs_support.id)}
            className={isReverse && 'reverse'}
          >
            <span>{bs_support.name}</span>
          </$MatchupCharacterBtn>
          {getAffinities(bs_support)}
        </$MatchupHeadliner>
        <$MatchupPower
          className={isReverse && 'reverse'}
          onClick={() => toggleModal(bs_support)}
        >
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {bs_support.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacterBtn
            onClick={() => getProfile(support.id)}
            className={isReverse && 'reverse'}
          >
            <span>{support.name}</span>
          </$MatchupCharacterBtn>
          {getAffinities(support)}
        </$MatchupHeadliner>
        <$MatchupPower
          className={isReverse && 'reverse'}
          onClick={() => toggleModal(support)}
        >
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {support.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacterBtn
            onClick={() => getProfile(villain.id)}
            className={isReverse && 'reverse'}
          >
            <span>{villain.name}</span>
          </$MatchupCharacterBtn>
          {getAffinities(villain)}
        </$MatchupHeadliner>
        <$MatchupPower
          className={isReverse && 'reverse'}
          onClick={() => toggleModal(villain)}
        >
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {villain.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacterBtn
            onClick={() => getProfile(battlefield.id)}
            className={isReverse && 'reverse'}
          >
            <span>{battlefield.name}</span>
          </$MatchupCharacterBtn>
          {getAffinities(battlefield)}
        </$MatchupHeadliner>
        <$MatchupPower
          className={isReverse && 'reverse'}
          onClick={() => toggleModal(battlefield)}
        >
          <$MatchupPowerText className={isReverse && 'reverse'}>
            {battlefield.matchPoints}
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <CharacterStats
        setIsModalOpen={setIsModalOpen}
        isModalOpen={isModalOpen}
        character={characterStats}
      />
    </$MatchupColumn>
  );
};

export default MatchUp;
