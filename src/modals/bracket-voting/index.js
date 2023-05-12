import React, { useEffect, useState } from 'react';
import {
  $BracketVotingCharacter,
  $BracketVotingVersus,
  $BracketVotingWrapper,
  $BracketVotingSection,
  $BracketVotingImage,
  $BracketVotingTotal,
} from './bracketVoting.style.js';
import Button from 'Components/button';
import { getNonLoggedInUser, responseError } from 'Utils/index.js';
import { addEvent } from 'Utils/amplitude.js';
import ErrorMsg from 'Components/error-msg/index.js';
import MainModal from '../main/index.js';
import { useAppContext } from 'src/hooks/context.js';

const BracketVoting = ({
  playerA,
  playerB,
  isModalOpen,
  match,
  handleVotes,
  errorMsg,
  setErrorMsg,
  closeModal,
  roundWinner,
}) => {
  const { currentUser } = useAppContext();
  const [playerACount, setPlayerACount] = useState(0);
  const [playerBCount, setPlayerBCount] = useState(0);
  const [bracketMatch, setBracketMatch] = useState(null);
  const [matchWinner, setMatchWinner] = useState(null);
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

  const handleAddingVotes = async (player, playerCount) => {
    setErrorMsg(null);

    const payload = {
      voteId: bracketMatch?.voteId,
      votedFor: player.id,
      playerCount,
      userId: currentUser?.user_id || getNonLoggedInUser(),
    };

    const team = playerCount === 'player_a_count' ? 'home' : 'away';

    try {
      const match = await handleVotes(bracketMatch, team, payload);

      playerCount === 'player_a_count'
        ? setPlayerACount(match.homeTeamScore)
        : setPlayerBCount(match.awayTeamScore);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to add votes - Part 2'));
      setErrorMsg(err.response.data.message);
    }
  };

  useEffect(() => {
    setPlayerACount(match?.homeTeamScore);
    setPlayerBCount(match?.awayTeamScore);
    setBracketMatch(match);
  }, [match]);

  useEffect(() => {
    if (roundWinner) {
      roundWinner.homeTeamScore > roundWinner.awayTeamScore
        ? setMatchWinner(roundWinner.homeTeamId)
        : setMatchWinner(roundWinner.awayTeamId);
    } else {
      setMatchWinner(null);
    }
  }, [roundWinner]);

  return (
    <MainModal
      modalIsOpen={isModalOpen}
      closeModal={closeModal}
      styles={customStyles}
    >
      {bracketMatch && (
        <center>
          <h2>
            Match {bracketMatch?.matchNumber}
            {!!matchWinner && ' - Winner'}
          </h2>
          <$BracketVotingWrapper
            className={`${errorMsg && 'spacing'}${!matchWinner && ' duo'}`}
          >
            {(matchWinner === playerA.id || !matchWinner) && (
              <$BracketVotingSection>
                <div>
                  <$BracketVotingImage
                    src={playerA.image_url}
                    alt={playerA.full_name}
                  />
                  <$BracketVotingCharacter>
                    {playerA.full_name}
                  </$BracketVotingCharacter>
                  <$BracketVotingTotal>
                  Total Votes: {playerACount}
                  </$BracketVotingTotal>
                </div>
                {!matchWinner && (
                  <div>
                    <Button
                      btnText={`Vote for ${playerA.name}`}
                      btnColor="primary"
                      customBtnClass="medium"
                      btnFunction={() =>
                        handleAddingVotes(playerA, 'player_a_count')
                      }
                    />
                    <$BracketVotingTotal>
                      Total Votes: {playerACount}
                    </$BracketVotingTotal>
                  </div>
                )}
              </$BracketVotingSection>
            )}
            {!matchWinner && (
              <$BracketVotingSection className="versus">
                <$BracketVotingVersus>VS</$BracketVotingVersus>
              </$BracketVotingSection>
            )}
            {(matchWinner === playerB.id || !matchWinner) && (
              <$BracketVotingSection>
                <div>
                  <$BracketVotingImage
                    src={playerB.image_url}
                    alt={playerB.full_name}
                  />
                  <$BracketVotingCharacter>
                    {playerB.full_name}
                  </$BracketVotingCharacter>
                  <$BracketVotingTotal>
                  Total Votes: {playerBCount}
                  </$BracketVotingTotal>
                </div>
                {!matchWinner && (
                  <div>
                    <Button
                      btnText={`Vote for ${playerB.name}`}
                      btnColor="primary"
                      customBtnClass="medium"
                      btnFunction={() =>
                        handleAddingVotes(playerB, 'player_b_count')
                      }
                    />
                    <$BracketVotingTotal>
                      Total Votes: {playerBCount}
                    </$BracketVotingTotal>
                  </div>
                )}
              </$BracketVotingSection>
            )}
          </$BracketVotingWrapper>
          {errorMsg && <ErrorMsg msg={errorMsg} />}
          <Button
            btnText="Close"
            btnColor="cancel"
            customBtnClass="medium"
            btnFunction={closeModal}
          />
        </center>
      )}
    </MainModal>
  );
};

export default BracketVoting;
