import React, { useState } from 'react';
import Button from '../../components/button';
import { $GlobalTitle } from 'Styles/global.style';
import {
  $ActivateVotingBtnWrapper,
  $ActivateVotingSection,
} from './activateVoting.style';
import MainModal from '../main';
import { createMatchupVotes } from 'src/requests/matchup';
import { useRouter } from 'next/router';
import { responseError } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import { useAppContext } from 'src/hooks/context';
import ErrorMsg from 'Components/error-msg';

const ActivateVoting = ({
  isModalOpen,
  setIsModalOpen,
  team1,
  team2,
  votes,
  setRetrigger,
}) => {
  const { currentUser } = useAppContext();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState(null);
  const canVote = votes.filter((vote) => {
    return (
      vote.rank !== 'captain' ||
      vote.rank !== 'brawler_a' ||
      vote.rank !== 'brawler_b' ||
      vote.rank !== 'bs_brawler' ||
      vote.rank !== 'bs_support' ||
      vote.rank !== 'support' ||
      vote.rank !== 'villain'
    );
  });
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

  const closeModal = () => {
    setErrorMsg(null);
    setIsModalOpen(false);
  };

  const handleVotes = async (rank) => {
    setErrorMsg(null);
    const { query } = router;
    const payload = {
      rank,
    };

    try {
      await createMatchupVotes(query?.matchup_id, payload, currentUser?.token);

      addEvent('Start Matchup Voting', {
        matchupId: query?.matchup_id,
        rank,
      });

      setRetrigger(true);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to create matchup voting'));
      setErrorMsg(err.response.data.message);
    }
  };

  const getCharacter = (team1, team2, rank) => {
    const activeVoting = votes.filter((vote) => vote.rank === rank);

    if (activeVoting.length) {
      return;
    }

    return (
      <$ActivateVotingSection>
        <Button
          btnText="Activate"
          btnColor="primary"
          btnFunction={() => handleVotes(rank)}
          customBtnClass="small"
        />
        <div>
          {team1.name} vs {team2.name}
        </div>
      </$ActivateVotingSection>
    );
  };

  return (
    <MainModal
      modalIsOpen={isModalOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      <$GlobalTitle>Activate Head-to-Head Voting</$GlobalTitle>
      {!!errorMsg && <ErrorMsg msg={errorMsg} />}
      {getCharacter(team1.captain, team2.captain, 'captain')}
      {getCharacter(team1.brawler_a, team2.brawler_a, 'brawler_a')}
      {getCharacter(team1.brawler_b, team2.brawler_b, 'brawler_b')}
      {getCharacter(team1.bs_brawler, team2.bs_brawler, 'bs_brawler')}
      {getCharacter(team1.bs_support, team2.bs_support, 'bs_support')}
      {getCharacter(team1.support, team2.support, 'support')}
      {getCharacter(team1.villain, team2.villain, 'villain')}
      {canVote.length === 7 && (
        <$ActivateVotingBtnWrapper>
          There are no more head-to-head battles that voting can be activated
          for.
        </$ActivateVotingBtnWrapper>
      )}
      <$ActivateVotingBtnWrapper>
        <Button
          btnText="Vote on Matchups"
          btnColor="primary"
          customBtnClass="medium"
          redirect={'/matchup/all'}
        />
        <Button
          btnText="Close"
          btnColor="cancel"
          customBtnClass="medium"
          btnFunction={closeModal}
        />
      </$ActivateVotingBtnWrapper>
    </MainModal>
  );
};

export default ActivateVoting;
