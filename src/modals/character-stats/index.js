import React, { useState } from 'react';
import Button from '../../components/button';
import { $GlobalTitle } from 'Styles/global.style';
import {
  $CharacterStatsBtnWrapper,
  $CharacterStatsScoring,
  $CharacterStatsPoints,
  $CharacterStatsLabel,
} from './characterStats.style';
import MainModal from '../main';
import { useAppContext } from 'src/hooks/context';
import ErrorMsg from 'Components/error-msg';

const CharacterStats = ({
  isModalOpen,
  setIsModalOpen,
  character,
  votes,
  isMatchupPage = true,
  userId = null,
  isActive = null,
}) => {
  const { currentUser } = useAppContext();
  const [errorMsg, setErrorMsg] = useState(null);
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      height: 600,
      borderRadius: 15,
    },
  };

  if (!character) {
    return;
  }

  const { name, matchPoints, damage, boost, originalPower, teamPoints, rank } =
    character;
  const boostTotal = teamPoints - originalPower;
  const damageTotal = teamPoints - matchPoints;
  const activeVoting = votes.filter((vote) => vote.rank === rank);
  const canVote =
    currentUser.user_id === userId &&
    isMatchupPage &&
    isActive > 0 &&
    rank !== 'battlefield';

  const closeModal = () => {
    setErrorMsg(null);
    setIsModalOpen(false);
  };

  return (
    <MainModal
      modalIsOpen={isModalOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      <$GlobalTitle>{name}</$GlobalTitle>
      <$CharacterStatsScoring>
        <$CharacterStatsLabel>Points</$CharacterStatsLabel>
        <$CharacterStatsPoints>{originalPower}</$CharacterStatsPoints>
      </$CharacterStatsScoring>
      <$CharacterStatsScoring>
        <$CharacterStatsLabel>Boost</$CharacterStatsLabel>
        <$CharacterStatsPoints>+ {boostTotal}</$CharacterStatsPoints>
      </$CharacterStatsScoring>
      <$CharacterStatsScoring>
        <$CharacterStatsLabel className="specific">
          Weekly Affinity
        </$CharacterStatsLabel>
        <$CharacterStatsPoints className="specific">
          {boost.week}
        </$CharacterStatsPoints>
      </$CharacterStatsScoring>
      <$CharacterStatsScoring>
        <$CharacterStatsLabel className="specific">
          Support
        </$CharacterStatsLabel>
        <$CharacterStatsPoints className="specific">
          {boost.support}
        </$CharacterStatsPoints>
      </$CharacterStatsScoring>
      <$CharacterStatsScoring>
        <$CharacterStatsLabel className="specific">
          Battlefield
        </$CharacterStatsLabel>
        <$CharacterStatsPoints className="specific">
          {boost.battlefield}
        </$CharacterStatsPoints>
      </$CharacterStatsScoring>
      <$CharacterStatsScoring>
        <$CharacterStatsLabel className="specific">Voting</$CharacterStatsLabel>
        <$CharacterStatsPoints className="specific">
          {boost.voting}
        </$CharacterStatsPoints>
      </$CharacterStatsScoring>
      {isMatchupPage && (
        <>
          <$CharacterStatsScoring>
            <$CharacterStatsLabel>Damage</$CharacterStatsLabel>
            <$CharacterStatsPoints>- {damageTotal}</$CharacterStatsPoints>
          </$CharacterStatsScoring>
          <$CharacterStatsScoring>
            <$CharacterStatsLabel className="specific">
              Weekly Affinity
            </$CharacterStatsLabel>
            <$CharacterStatsPoints className="specific">
              {damage.week}
            </$CharacterStatsPoints>
          </$CharacterStatsScoring>
          <$CharacterStatsScoring>
            <$CharacterStatsLabel className="specific">
              Villain
            </$CharacterStatsLabel>
            <$CharacterStatsPoints className="specific">
              {damage.villain}
            </$CharacterStatsPoints>
          </$CharacterStatsScoring>
          <$CharacterStatsScoring>
            <$CharacterStatsLabel className="specific">
              Battlefield
            </$CharacterStatsLabel>
            <$CharacterStatsPoints className="specific">
              {damage.battlefield}
            </$CharacterStatsPoints>
          </$CharacterStatsScoring>
          <$CharacterStatsScoring>
            <$CharacterStatsLabel className="specific">
              Voting
            </$CharacterStatsLabel>
            <$CharacterStatsPoints className="specific">
              {damage.voting}
            </$CharacterStatsPoints>
          </$CharacterStatsScoring>
        </>
      )}
      <$CharacterStatsScoring className="total">
        <$CharacterStatsLabel>Total Points</$CharacterStatsLabel>
        <$CharacterStatsPoints>
          {isMatchupPage ? matchPoints : teamPoints}
        </$CharacterStatsPoints>
      </$CharacterStatsScoring>
      {!!errorMsg && <ErrorMsg msg={errorMsg} />}
      <$CharacterStatsBtnWrapper>
        {!!activeVoting.length && canVote && (
          <Button
            btnText="View Voting Status"
            btnColor="primary"
            customBtnClass="medium"
            redirect={`/matchup/vote?vote_id=${activeVoting[0].id}`}
          />
        )}
        <Button
          btnText="Close"
          btnColor="cancel"
          customBtnClass="medium"
          btnFunction={closeModal}
        />
      </$CharacterStatsBtnWrapper>
    </MainModal>
  );
};

export default CharacterStats;
