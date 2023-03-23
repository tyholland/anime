import React, { useEffect, useState } from 'react';
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
  const [allVotes, setAllVotes] = useState(votes);
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

  const getCharacter = () => {
    const list = [
      'captain',
      'brawler_a',
      'brawler_b',
      'bs_brawler',
      'bs_support',
      'support',
      'villain',
    ];

    const votingList = list
      .map((item) => {
        const activeVoting = allVotes.filter((vote) => vote.rank === item);

        if (
          activeVoting.length ||
          team1[item].matchPoints === 0 ||
          team2[item].matchPoints === 0 ||
          !team1[item].id ||
          !team2[item].id
        ) {
          return;
        }

        return (
          <$ActivateVotingSection key={item}>
            <Button
              btnText="Activate"
              btnColor="primary"
              btnFunction={() => handleVotes(item)}
              customBtnClass="small"
            />
            <div>
              {team1[item].name} vs {team2[item].name}
            </div>
          </$ActivateVotingSection>
        );
      })
      .filter(Boolean);

    return votingList;
  };

  useEffect(() => {
    setAllVotes(votes);
  }, [votes]);

  return (
    <MainModal
      modalIsOpen={isModalOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      <$GlobalTitle>Activate Head-to-Head Voting</$GlobalTitle>
      {!!errorMsg && <ErrorMsg msg={errorMsg} />}
      {getCharacter().length > 0 && getCharacter()}
      {getCharacter().length === 0 && (
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
