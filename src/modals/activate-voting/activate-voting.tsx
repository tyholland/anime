import React, { useEffect, useState } from 'react';
import Button from 'Components/button/button';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './activateVoting.style';
import MainModal from '../main/main';
import { createMatchupVotes } from 'Requests/matchup';
import { useRouter } from 'next/router';
import { responseError } from 'Utils/index';
import { addEvent } from 'Utils/amplitude';
import { useUserContext } from 'Hooks/user';
import ErrorMsg from 'Components/error-msg/error-msg';
import { ActivateVotingProps } from 'Utils/types';

const ActivateVoting = ({
  isModalOpen,
  setIsModalOpen,
  team1,
  team2,
  votes,
  setRetrigger,
}: ActivateVotingProps) => {
  const { currentUser } = useUserContext();
  const router = useRouter();
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [allVotes, setAllVotes] = useState<Record<string, any>>(votes);
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

  const handleVotes = async (rank: string) => {
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
        userId: currentUser?.user_id
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
      .map((item: string) => {
        const activeVoting = allVotes.filter((vote: Record<string, any>) => vote.rank === item);

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
          <Styles.ActivateVotingSection key={item}>
            <Button
              btnText="Activate"
              btnColor="primary"
              btnFunction={() => handleVotes(item)}
              customBtnClass="small"
            />
            <div>
              {team1[item].name} vs {team2[item].name}
            </div>
          </Styles.ActivateVotingSection>
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
      <GlobalStyles.GlobalTitle>Activate Head-to-Head Voting</GlobalStyles.GlobalTitle>
      {!!errorMsg && <ErrorMsg msg={errorMsg} />}
      {getCharacter().length > 0 && getCharacter()}
      {getCharacter().length === 0 && (
        <Styles.ActivateVotingBtnWrapper>
          There are no more head-to-head battles that voting can be activated
          for.
        </Styles.ActivateVotingBtnWrapper>
      )}
      <Styles.ActivateVotingBtnWrapper>
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
      </Styles.ActivateVotingBtnWrapper>
    </MainModal>
  );
};

export default ActivateVoting;
