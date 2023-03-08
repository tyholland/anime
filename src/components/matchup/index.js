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
  $MatchupCharacterBtnWrapper,
  $MatchupAsterik,
} from './matchup.style.js';
import { $GlobalCircle } from 'Styles/global.style.js';
import { useRouter } from 'next/router.js';

const MatchUp = ({ isReverse, team, votes, userId, isActive }) => {
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
                title={item.type === 'noAffinity' ? 'no affinity' : item.type}
              ></$GlobalCircle>
            );
          })}
        {!character.affinity.length && <span>-</span>}
      </$MatchupAffinity>
    );
  };

  const getProfile = (id) => {
    router.push(`/bio?character=${id}`);
  };

  const getCharacterName = (player, rank) => {
    const activeVoting = votes.filter((vote) => vote.rank === rank);

    if (activeVoting.length) {
      return (
        <span>
          <$MatchupAsterik>**</$MatchupAsterik>
          {player.name}
        </span>
      );
    }

    return <span>{player.name}</span>;
  };

  return (
    <$MatchupColumn>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
            <$MatchupCharacterBtn
              onClick={() => getProfile(captain.id)}
              className={isReverse && 'reverse'}
            >
              {getCharacterName(captain, 'captain')}
            </$MatchupCharacterBtn>
          </$MatchupCharacterBtnWrapper>
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
          <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
            <$MatchupCharacterBtn
              onClick={() => getProfile(brawler_a.id)}
              className={isReverse && 'reverse'}
            >
              {getCharacterName(brawler_a, 'brawler_a')}
            </$MatchupCharacterBtn>
          </$MatchupCharacterBtnWrapper>
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
          <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
            <$MatchupCharacterBtn
              onClick={() => getProfile(brawler_b.id)}
              className={isReverse && 'reverse'}
            >
              {getCharacterName(brawler_b, 'brawler_b')}
            </$MatchupCharacterBtn>
          </$MatchupCharacterBtnWrapper>
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
          <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
            <$MatchupCharacterBtn
              onClick={() => getProfile(bs_brawler.id)}
              className={isReverse && 'reverse'}
            >
              {getCharacterName(bs_brawler, 'bs_brawler')}
            </$MatchupCharacterBtn>
          </$MatchupCharacterBtnWrapper>
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
          <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
            <$MatchupCharacterBtn
              onClick={() => getProfile(bs_support.id)}
              className={isReverse && 'reverse'}
            >
              {getCharacterName(bs_support, 'bs_support')}
            </$MatchupCharacterBtn>
          </$MatchupCharacterBtnWrapper>
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
          <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
            <$MatchupCharacterBtn
              onClick={() => getProfile(support.id)}
              className={isReverse && 'reverse'}
            >
              {getCharacterName(support, 'support')}
            </$MatchupCharacterBtn>
          </$MatchupCharacterBtnWrapper>
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
          <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
            <$MatchupCharacterBtn
              onClick={() => getProfile(villain.id)}
              className={isReverse && 'reverse'}
            >
              {getCharacterName(villain, 'villain')}
            </$MatchupCharacterBtn>
          </$MatchupCharacterBtnWrapper>
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
          <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
            <$MatchupCharacterBtn
              onClick={() => getProfile(battlefield.id)}
              className={isReverse && 'reverse'}
            >
              {getCharacterName(battlefield, 'battlefield')}
            </$MatchupCharacterBtn>
          </$MatchupCharacterBtnWrapper>
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
        votes={votes}
        userId={userId}
        isActive={isActive}
      />
    </$MatchupColumn>
  );
};

export default MatchUp;
