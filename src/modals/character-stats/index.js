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
import { createMatchupVotes } from 'src/requests/matchup';
import { useRouter } from 'next/router';
import { getCookie, responseError } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';

const CharacterStats = ({ isModalOpen, setIsModalOpen, character }) => {
  const router = useRouter();
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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleVotes = async () => {
    const { query } = router;
    const payload = {
      rank,
    };

    try {
      const newMatchup = await createMatchupVotes(
        query?.matchup_id,
        payload,
        getCookie('token')
      );

      addEvent('Matchup Voting', {
        matchupId: query?.matchup_id,
        rank,
      });

      router.push(`/matchup/vote/${newMatchup.matchupVoteId}`);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to create matchup voting'));
    }
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
          btnFunction={handleVotes}
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
