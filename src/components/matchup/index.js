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
import BioReview from 'src/modals/bio-review/index.js';

const MatchUp = ({ isReverse, team, votes, userId, isActive }) => {
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
  } = team;

  const toggleModal = (character) => {
    if (character.id) {
      setIsModalOpen(!isModalOpen);
      setCharacterStats(character);
    }
  };

  const getAffinities = (character) => {
    return (
      <$MatchupAffinity className={isReverse && 'reverse'}>
        {!!character.affinity?.length &&
          character.affinity.map((item) => {
            return (
              <$GlobalCircle
                key={item.type}
                className={`team ${item.type}`}
                title={item.type === 'noAffinity' ? 'no affinity' : item.type}
              ></$GlobalCircle>
            );
          })}
        {!character.affinity?.length && <span>-</span>}
      </$MatchupAffinity>
    );
  };

  const getProfile = (id) => {
    setBioModalIsOpen(true);
    setCharacterId(id);
  };

  const closeModal = () => {
    setBioModalIsOpen(false);
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

    return <span>{player.name || '-'}</span>;
  };

  return (
    <>
      <$MatchupColumn>
        <$MatchupSection className={isReverse && 'reverse'}>
          <$MatchupHeadliner>
            <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <$MatchupCharacterBtn
                onClick={() => getProfile(captain.id)}
                className={`${isReverse && 'reverse'}${
                  !captain.id ? ' disable' : ''
                }`}
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
            <$MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!captain.id}
            >
              {!captain.id
                ? '-'
                : captain.matchPoints < 0
                  ? 0
                  : captain.matchPoints === 0
                    ? 'Bye'
                    : captain.matchPoints}
            </$MatchupPowerText>
          </$MatchupPower>
        </$MatchupSection>
        <$MatchupSection className={isReverse && 'reverse'}>
          <$MatchupHeadliner>
            <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <$MatchupCharacterBtn
                onClick={() => getProfile(brawler_a.id)}
                className={`${isReverse && 'reverse'}${
                  !brawler_a.id ? ' disable' : ''
                }`}
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
            <$MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!brawler_a.id}
            >
              {!brawler_a.id
                ? '-'
                : brawler_a.matchPoints < 0
                  ? 0
                  : brawler_a.matchPoints === 0
                    ? 'Bye'
                    : brawler_a.matchPoints}
            </$MatchupPowerText>
          </$MatchupPower>
        </$MatchupSection>
        <$MatchupSection className={isReverse && 'reverse'}>
          <$MatchupHeadliner>
            <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <$MatchupCharacterBtn
                onClick={() => getProfile(brawler_b.id)}
                className={`${isReverse && 'reverse'}${
                  !brawler_b.id ? ' disable' : ''
                }`}
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
            <$MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!brawler_b.id}
            >
              {!brawler_b.id
                ? '-'
                : brawler_b.matchPoints < 0
                  ? 0
                  : brawler_b.matchPoints === 0
                    ? 'Bye'
                    : brawler_b.matchPoints}
            </$MatchupPowerText>
          </$MatchupPower>
        </$MatchupSection>
        <$MatchupSection className={`duo ${isReverse && 'reverse'}`}>
          <$MatchupHeadliner>
            <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <$MatchupCharacterBtn
                onClick={() => getProfile(bs_brawler.id)}
                className={`${isReverse && 'reverse'}${
                  !bs_brawler.id ? ' disable' : ''
                }`}
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
            <$MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!bs_brawler.id}
            >
              {!bs_brawler.id
                ? '-'
                : bs_brawler.matchPoints < 0
                  ? 0
                  : bs_brawler.matchPoints === 0
                    ? 'Bye'
                    : bs_brawler.matchPoints}
            </$MatchupPowerText>
          </$MatchupPower>
        </$MatchupSection>
        <$MatchupSection className={isReverse && 'reverse'}>
          <$MatchupHeadliner>
            <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <$MatchupCharacterBtn
                onClick={() => getProfile(bs_support.id)}
                className={`${isReverse && 'reverse'}${
                  !bs_support.id ? ' disable' : ''
                }`}
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
            <$MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!bs_support.id}
            >
              {!bs_support.id
                ? '-'
                : bs_support.matchPoints < 0
                  ? 0
                  : bs_support.matchPoints === 0
                    ? 'Bye'
                    : bs_support.matchPoints}
            </$MatchupPowerText>
          </$MatchupPower>
        </$MatchupSection>
        <$MatchupSection className={isReverse && 'reverse'}>
          <$MatchupHeadliner>
            <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <$MatchupCharacterBtn
                onClick={() => getProfile(support.id)}
                className={`${isReverse && 'reverse'}${
                  !support.id ? ' disable' : ''
                }`}
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
            <$MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!support.id}
            >
              {!support.id
                ? '-'
                : support.matchPoints < 0
                  ? 0
                  : support.matchPoints === 0
                    ? 'Bye'
                    : support.matchPoints}
            </$MatchupPowerText>
          </$MatchupPower>
        </$MatchupSection>
        <$MatchupSection className={isReverse && 'reverse'}>
          <$MatchupHeadliner>
            <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <$MatchupCharacterBtn
                onClick={() => getProfile(villain.id)}
                className={`${isReverse && 'reverse'}${
                  !villain.id ? ' disable' : ''
                }`}
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
            <$MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!villain.id}
            >
              {!villain.id
                ? '-'
                : villain.matchPoints < 0
                  ? 0
                  : villain.matchPoints === 0
                    ? 'Bye'
                    : villain.matchPoints}
            </$MatchupPowerText>
          </$MatchupPower>
        </$MatchupSection>
        <$MatchupSection className={isReverse && 'reverse'}>
          <$MatchupHeadliner>
            <$MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <$MatchupCharacterBtn
                onClick={() => getProfile(battlefield.id)}
                className={`${isReverse && 'reverse'}${
                  !battlefield.id ? ' disable' : ''
                }`}
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
            <$MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!battlefield.id}
            >
              {!battlefield.id
                ? '-'
                : battlefield.matchPoints < 0
                  ? 0
                  : battlefield.matchPoints === 0
                    ? 'Bye'
                    : battlefield.matchPoints}
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
      <BioReview
        modalIsOpen={bioModalIsOpen}
        closeModal={closeModal}
        characterId={characterId}
      />
    </>
  );
};

export default MatchUp;
