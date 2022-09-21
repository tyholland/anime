import React from 'react';
import Button from '../button';
import Modal from 'react-modal';
import { $GlobalTitle } from 'Styles/global.style';
import {
  $CharacterStatsContainer,
  $CharacterStatsBtnWrapper,
  $CharacterStatsScoring,
  $CharacterStatsPoints,
  $CharacterStatsLabel,
} from './characterStats.style';

const CharacterStats = ({ isModalOpen, setIsModalOpen }) => {
  const shareEvent = async () => {
    alert('This is a test');
  };

  Modal.setAppElement('#__next');

  const customStyles = {
    content: {
      position: 'relative',
      minWidth: '300px',
      maxWidth: '800px',
    },
    overlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }
  };

  return (
    <Modal isOpen={isModalOpen} style={ customStyles }>
      <$CharacterStatsContainer>
        <$GlobalTitle>Goku</$GlobalTitle>
        <$CharacterStatsScoring>
          <$CharacterStatsLabel>Power Level</$CharacterStatsLabel>
          <$CharacterStatsPoints>1500</$CharacterStatsPoints>
        </$CharacterStatsScoring>
        <$CharacterStatsScoring>
          <$CharacterStatsLabel>Power Boost</$CharacterStatsLabel>
          <$CharacterStatsPoints>300</$CharacterStatsPoints>
        </$CharacterStatsScoring>
        <$CharacterStatsScoring>
          <$CharacterStatsLabel className="specific">Weekly Affinity</$CharacterStatsLabel>
          <$CharacterStatsPoints className="specific">100</$CharacterStatsPoints>
        </$CharacterStatsScoring>
        <$CharacterStatsScoring>
          <$CharacterStatsLabel className="specific">Support</$CharacterStatsLabel>
          <$CharacterStatsPoints className="specific">100</$CharacterStatsPoints>
        </$CharacterStatsScoring>
        <$CharacterStatsScoring>
          <$CharacterStatsLabel className="specific">Battlefield</$CharacterStatsLabel>
          <$CharacterStatsPoints className="specific">100</$CharacterStatsPoints>
        </$CharacterStatsScoring>
        <$CharacterStatsScoring>
          <$CharacterStatsLabel>Power Loss</$CharacterStatsLabel>
          <$CharacterStatsPoints>- 100</$CharacterStatsPoints>
        </$CharacterStatsScoring>
        <$CharacterStatsScoring>
          <$CharacterStatsLabel className="specific">Villain</$CharacterStatsLabel>
          <$CharacterStatsPoints className="specific">50</$CharacterStatsPoints>
        </$CharacterStatsScoring>
        <$CharacterStatsScoring>
          <$CharacterStatsLabel>Voting</$CharacterStatsLabel>
          <$CharacterStatsPoints>0</$CharacterStatsPoints>
        </$CharacterStatsScoring>
        <$CharacterStatsScoring className="total">
          <$CharacterStatsLabel>Total Points</$CharacterStatsLabel>
          <$CharacterStatsPoints>1700</$CharacterStatsPoints>
        </$CharacterStatsScoring>
        <$CharacterStatsBtnWrapper>
          <Button
            btnText="Get Votes"
            btnTextColor="black"
            btnColor="orange"
            customBtnClass="medium"
            btnFunction={shareEvent}
          />
          <Button
            btnText="Close"
            btnTextColor="white"
            btnColor="red"
            customBtnClass="medium"
            btnFunction={() => setIsModalOpen(!isModalOpen)}
          />
        </$CharacterStatsBtnWrapper>
      </$CharacterStatsContainer>
    </Modal>
  );
};

export default CharacterStats;
