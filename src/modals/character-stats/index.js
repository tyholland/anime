import React from 'react';
import Button from '../../components/button';
import { $GlobalTitle } from 'Styles/global.style';
import {
  $CharacterStatsBtnWrapper,
  $CharacterStatsScoring,
  $CharacterStatsPoints,
  $CharacterStatsLabel,
} from './characterStats.style';
import MainModal from '../main';

const CharacterStats = ({ isModalOpen, setIsModalOpen, character }) => {
  const shareEvent = async () => {
    alert('This is a test');
  };

  const customStyles = {
    content: {
      position: 'relative',
      maxWidth: '500px',
      maxHeight: '600px',
    },
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  if (!character) {
    return;
  }

  const { name, matchPoints, damage, boost, originalPower, teamPoints } =
    character;
  const boostTotal = teamPoints - originalPower;
  const damageTotal = teamPoints - matchPoints;

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
        <$CharacterStatsLabel className="specific">Voting</$CharacterStatsLabel>
        <$CharacterStatsPoints className="specific">
          {damage.voting}
        </$CharacterStatsPoints>
      </$CharacterStatsScoring>
      <$CharacterStatsScoring className="total">
        <$CharacterStatsLabel>Total Points</$CharacterStatsLabel>
        <$CharacterStatsPoints>{matchPoints}</$CharacterStatsPoints>
      </$CharacterStatsScoring>
      <$CharacterStatsBtnWrapper>
        <Button
          btnText="Get Votes"
          btnColor="primary"
          customBtnClass="medium"
          btnFunction={shareEvent}
        />
        <Button
          btnText="Close"
          btnColor="cancel"
          customBtnClass="medium"
          btnFunction={() => setIsModalOpen(!isModalOpen)}
        />
      </$CharacterStatsBtnWrapper>
    </MainModal>
  );
};

export default CharacterStats;
