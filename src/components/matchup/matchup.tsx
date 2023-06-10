import CharacterStats from 'Modals/character-stats/character-stats';
import React, { useState } from 'react';
import * as Styles from './matchup.style';
import * as GlobalStyles from 'Styles/global.style';
import BioReview from 'Modals/bio-review/bio-review';
import { MatchUpProps } from 'Utils/types';

const MatchUp = ({ isReverse, team, votes, userId, isActive }: MatchUpProps) => {
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
  } = team;

  const toggleModal = (character: Record<string, any>) => {
    if (character.id) {
      setIsModalOpen(!isModalOpen);
      setCharacterStats(character);
    }
  };

  const getAffinities = (character: Record<string, any>) => {
    return (
      <Styles.MatchupAffinity className={isReverse && 'reverse'}>
        {!!character.affinity?.length &&
          character.affinity.map((item) => {
            return (
              <GlobalStyles.GlobalCircle
                key={item.type}
                className={`team ${item.type}`}
                title={item.type === 'noAffinity' ? 'no affinity' : item.type}
              ></GlobalStyles.GlobalCircle>
            );
          })}
        {!character.affinity?.length && <span>-</span>}
      </Styles.MatchupAffinity>
    );
  };

  const getProfile = (id: number) => {
    setBioModalIsOpen(true);
    setCharacterId(id);
  };

  const closeModal = () => {
    setBioModalIsOpen(false);
  };

  const getCharacterName = (player: Record<string, any>, rank: string) => {
    const activeVoting = votes.filter((vote: Record<string, any>) => vote.rank === rank);

    if (activeVoting.length) {
      return (
        <span>
          <Styles.MatchupAsterik>**</Styles.MatchupAsterik>
          {player.name}
        </span>
      );
    }

    return <span>{player.name || '-'}</span>;
  };

  return (
    <>
      <Styles.MatchupColumn>
        <Styles.MatchupSection className={isReverse && 'reverse'}>
          <Styles.MatchupHeadliner>
            <Styles.MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <Styles.MatchupCharacterBtn
                onClick={() => getProfile(captain.id)}
                className={`${isReverse && 'reverse'}${
                  !captain.id ? ' disable' : ''
                }`}
              >
                {getCharacterName(captain, 'captain')}
              </Styles.MatchupCharacterBtn>
            </Styles.MatchupCharacterBtnWrapper>
            {getAffinities(captain)}
          </Styles.MatchupHeadliner>
          <Styles.MatchupPower
            className={isReverse && 'reverse'}
            onClick={() => toggleModal(captain)}
          >
            <Styles.MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!captain.id}
            >
              {!captain.id
                ? '-'
                : (captain.matchPoints < 0 || (captain.matchPoints === 0 && captain.teamPoints > 0))
                  ? 0
                  : captain.matchPoints === 0
                    ? 'Bye'
                    : captain.matchPoints}
            </Styles.MatchupPowerText>
          </Styles.MatchupPower>
        </Styles.MatchupSection>
        <Styles.MatchupSection className={isReverse && 'reverse'}>
          <Styles.MatchupHeadliner>
            <Styles.MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <Styles.MatchupCharacterBtn
                onClick={() => getProfile(brawler_a.id)}
                className={`${isReverse && 'reverse'}${
                  !brawler_a.id ? ' disable' : ''
                }`}
              >
                {getCharacterName(brawler_a, 'brawler_a')}
              </Styles.MatchupCharacterBtn>
            </Styles.MatchupCharacterBtnWrapper>
            {getAffinities(brawler_a)}
          </Styles.MatchupHeadliner>
          <Styles.MatchupPower
            className={isReverse && 'reverse'}
            onClick={() => toggleModal(brawler_a)}
          >
            <Styles.MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!brawler_a.id}
            >
              {!brawler_a.id
                ? '-'
                : (brawler_a.matchPoints < 0 || (brawler_a.matchPoints === 0 && brawler_a.teamPoints > 0))
                  ? 0
                  : brawler_a.matchPoints === 0
                    ? 'Bye'
                    : brawler_a.matchPoints}
            </Styles.MatchupPowerText>
          </Styles.MatchupPower>
        </Styles.MatchupSection>
        <Styles.MatchupSection className={isReverse && 'reverse'}>
          <Styles.MatchupHeadliner>
            <Styles.MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <Styles.MatchupCharacterBtn
                onClick={() => getProfile(brawler_b.id)}
                className={`${isReverse && 'reverse'}${
                  !brawler_b.id ? ' disable' : ''
                }`}
              >
                {getCharacterName(brawler_b, 'brawler_b')}
              </Styles.MatchupCharacterBtn>
            </Styles.MatchupCharacterBtnWrapper>
            {getAffinities(brawler_b)}
          </Styles.MatchupHeadliner>
          <Styles.MatchupPower
            className={isReverse && 'reverse'}
            onClick={() => toggleModal(brawler_b)}
          >
            <Styles.MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!brawler_b.id}
            >
              {!brawler_b.id
                ? '-'
                : (brawler_b.matchPoints < 0 || (brawler_b.matchPoints === 0 && brawler_b.teamPoints > 0))
                  ? 0
                  : brawler_b.matchPoints === 0
                    ? 'Bye'
                    : brawler_b.matchPoints}
            </Styles.MatchupPowerText>
          </Styles.MatchupPower>
        </Styles.MatchupSection>
        <Styles.MatchupSection className={`duo ${isReverse && 'reverse'}`}>
          <Styles.MatchupHeadliner>
            <Styles.MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <Styles.MatchupCharacterBtn
                onClick={() => getProfile(bs_brawler.id)}
                className={`${isReverse && 'reverse'}${
                  !bs_brawler.id ? ' disable' : ''
                }`}
              >
                {getCharacterName(bs_brawler, 'bs_brawler')}
              </Styles.MatchupCharacterBtn>
            </Styles.MatchupCharacterBtnWrapper>
            {getAffinities(bs_brawler)}
          </Styles.MatchupHeadliner>
          <Styles.MatchupPower
            className={isReverse && 'reverse'}
            onClick={() => toggleModal(bs_brawler)}
          >
            <Styles.MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!bs_brawler.id}
            >
              {!bs_brawler.id
                ? '-'
                : (bs_brawler.matchPoints < 0 || (bs_brawler.matchPoints === 0 && bs_brawler.teamPoints > 0))
                  ? 0
                  : bs_brawler.matchPoints === 0
                    ? 'Bye'
                    : bs_brawler.matchPoints}
            </Styles.MatchupPowerText>
          </Styles.MatchupPower>
        </Styles.MatchupSection>
        <Styles.MatchupSection className={isReverse && 'reverse'}>
          <Styles.MatchupHeadliner>
            <Styles.MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <Styles.MatchupCharacterBtn
                onClick={() => getProfile(bs_support.id)}
                className={`${isReverse && 'reverse'}${
                  !bs_support.id ? ' disable' : ''
                }`}
              >
                {getCharacterName(bs_support, 'bs_support')}
              </Styles.MatchupCharacterBtn>
            </Styles.MatchupCharacterBtnWrapper>
            {getAffinities(bs_support)}
          </Styles.MatchupHeadliner>
          <Styles.MatchupPower
            className={isReverse && 'reverse'}
            onClick={() => toggleModal(bs_support)}
          >
            <Styles.MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!bs_support.id}
            >
              {!bs_support.id
                ? '-'
                : (bs_support.matchPoints < 0 || (bs_support.matchPoints === 0 && bs_support.teamPoints > 0))
                  ? 0
                  : bs_support.matchPoints === 0
                    ? 'Bye'
                    : bs_support.matchPoints}
            </Styles.MatchupPowerText>
          </Styles.MatchupPower>
        </Styles.MatchupSection>
        <Styles.MatchupSection className={isReverse && 'reverse'}>
          <Styles.MatchupHeadliner>
            <Styles.MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <Styles.MatchupCharacterBtn
                onClick={() => getProfile(support.id)}
                className={`${isReverse && 'reverse'}${
                  !support.id ? ' disable' : ''
                }`}
              >
                {getCharacterName(support, 'support')}
              </Styles.MatchupCharacterBtn>
            </Styles.MatchupCharacterBtnWrapper>
            {getAffinities(support)}
          </Styles.MatchupHeadliner>
          <Styles.MatchupPower
            className={isReverse && 'reverse'}
            onClick={() => toggleModal(support)}
          >
            <Styles.MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!support.id}
            >
              {!support.id
                ? '-'
                : (support.matchPoints < 0 || (support.matchPoints === 0 && support.teamPoints > 0))
                  ? 0
                  : support.matchPoints === 0
                    ? 'Bye'
                    : support.matchPoints}
            </Styles.MatchupPowerText>
          </Styles.MatchupPower>
        </Styles.MatchupSection>
        <Styles.MatchupSection className={isReverse && 'reverse'}>
          <Styles.MatchupHeadliner>
            <Styles.MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <Styles.MatchupCharacterBtn
                onClick={() => getProfile(villain.id)}
                className={`${isReverse && 'reverse'}${
                  !villain.id ? ' disable' : ''
                }`}
              >
                {getCharacterName(villain, 'villain')}
              </Styles.MatchupCharacterBtn>
            </Styles.MatchupCharacterBtnWrapper>
            {getAffinities(villain)}
          </Styles.MatchupHeadliner>
          <Styles.MatchupPower
            className={isReverse && 'reverse'}
            onClick={() => toggleModal(villain)}
          >
            <Styles.MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!villain.id}
            >
              {!villain.id
                ? '-'
                : (villain.matchPoints < 0 || (villain.matchPoints === 0 && villain.teamPoints > 0))
                  ? 0
                  : villain.matchPoints === 0
                    ? 'Bye'
                    : villain.matchPoints}
            </Styles.MatchupPowerText>
          </Styles.MatchupPower>
        </Styles.MatchupSection>
        <Styles.MatchupSection className={isReverse && 'reverse'}>
          <Styles.MatchupHeadliner>
            <Styles.MatchupCharacterBtnWrapper className={isReverse && 'reverse'}>
              <Styles.MatchupCharacterBtn
                onClick={() => getProfile(battlefield.id)}
                className={`${isReverse && 'reverse'}${
                  !battlefield.id ? ' disable' : ''
                }`}
              >
                {getCharacterName(battlefield, 'battlefield')}
              </Styles.MatchupCharacterBtn>
            </Styles.MatchupCharacterBtnWrapper>
            {getAffinities(battlefield)}
          </Styles.MatchupHeadliner>
          <Styles.MatchupPower
            className={isReverse && 'reverse'}
            onClick={() => toggleModal(battlefield)}
          >
            <Styles.MatchupPowerText
              className={isReverse && 'reverse'}
              noCharacter={!battlefield.id}
            >
              {!battlefield.id
                ? '-'
                : (battlefield.matchPoints < 0 || (battlefield.matchPoints === 0 && battlefield.teamPoints > 0))
                  ? 0
                  : battlefield.matchPoints === 0
                    ? 'Bye'
                    : battlefield.matchPoints}
            </Styles.MatchupPowerText>
          </Styles.MatchupPower>
        </Styles.MatchupSection>
        <CharacterStats
          setIsModalOpen={setIsModalOpen}
          isModalOpen={isModalOpen}
          character={characterStats}
          votes={votes}
          userId={userId}
          isActive={isActive}
        />
      </Styles.MatchupColumn>
      <BioReview
        modalIsOpen={bioModalIsOpen}
        closeModal={closeModal}
        characterId={characterId}
      />
    </>
  );
};

export default MatchUp;
