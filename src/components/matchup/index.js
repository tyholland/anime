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

const MatchUp = ({ isReverse }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <$MatchupColumn>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            Goku
          </$MatchupCharacter>
          <$MatchupAffinity className={ isReverse && 'reverse' }>
            -
          </$MatchupAffinity>
        </$MatchupHeadliner>
        <$MatchupPower className={ isReverse && 'reverse' } onClick={toggleModal}>
          <$MatchupPowerText className={ isReverse && 'reverse' }>
            1500
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            Arthur
          </$MatchupCharacter>
          <$MatchupAffinity className={ isReverse && 'reverse' }>
            <$GlobalCircle className="fire"></$GlobalCircle>
          </$MatchupAffinity>
        </$MatchupHeadliner>
        <$MatchupPower className={ isReverse && 'reverse' } onClick={toggleModal}>
          <$MatchupPowerText className={ isReverse && 'reverse' }>
            1250
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            Genos
          </$MatchupCharacter>
          <$MatchupAffinity className={ isReverse && 'reverse' }>
            <$GlobalCircle className="fire"></$GlobalCircle>
          </$MatchupAffinity>
        </$MatchupHeadliner>
        <$MatchupPower className={ isReverse && 'reverse' } onClick={toggleModal}>
          <$MatchupPowerText className={ isReverse && 'reverse' }>
            1250
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={ `duo ${isReverse && 'reverse'}` }>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            Lee
          </$MatchupCharacter>
          <$MatchupAffinity className={ isReverse && 'reverse' }>
            -
          </$MatchupAffinity>
        </$MatchupHeadliner>
        <$MatchupPower className={ isReverse && 'reverse' } onClick={toggleModal}>
          <$MatchupPowerText className={ isReverse && 'reverse' }>
            1250
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            Tenten
          </$MatchupCharacter>
          <$MatchupAffinity className={ isReverse && 'reverse' }>
            -
          </$MatchupAffinity>
        </$MatchupHeadliner>
        <$MatchupPower className={ isReverse && 'reverse' } onClick={toggleModal}>
          <$MatchupPowerText className={ isReverse && 'reverse' }>
            1000
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            Chad
          </$MatchupCharacter>
          <$MatchupAffinity className={ isReverse && 'reverse' }>
            -
          </$MatchupAffinity>
        </$MatchupHeadliner>
        <$MatchupPower className={ isReverse && 'reverse' } onClick={toggleModal}>
          <$MatchupPowerText className={ isReverse && 'reverse' }>
            1000
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            Sasori
          </$MatchupCharacter>
          <$MatchupAffinity className={ isReverse && 'reverse' }>
            -
          </$MatchupAffinity>
        </$MatchupHeadliner>
        <$MatchupPower className={ isReverse && 'reverse' } onClick={toggleModal}>
          <$MatchupPowerText className={ isReverse && 'reverse' }>
            1250
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <$MatchupSection className={isReverse && 'reverse'}>
        <$MatchupHeadliner>
          <$MatchupCharacter className={isReverse && 'reverse'}>
            Soul Society
          </$MatchupCharacter>
          <$MatchupAffinity className={ isReverse && 'reverse' }>
            <$GlobalCircle className="arcane"></$GlobalCircle>
          </$MatchupAffinity>
        </$MatchupHeadliner>
        <$MatchupPower className={ isReverse && 'reverse' } onClick={toggleModal}>
          <$MatchupPowerText className={ isReverse && 'reverse' }>
            -
          </$MatchupPowerText>
        </$MatchupPower>
      </$MatchupSection>
      <CharacterStats setIsModalOpen={ setIsModalOpen } isModalOpen={ isModalOpen } />
    </$MatchupColumn>
  );
};

export default MatchUp;
