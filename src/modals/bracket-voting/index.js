import React, { useEffect, useState } from 'react';
import {
  $MatchupVotingCharacter,
  $MatchupVotingVersus,
  $MatchupVotingWrapper,
  $MatchupVotingSection,
  $MatchupVotingImage,
  $MatchupVotingTotal,
} from './bracketVoting.style.js';
import Button from 'Components/button';
import { responseError } from 'Utils/index.js';
import { addEvent } from 'Utils/amplitude.js';
import ErrorMsg from 'Components/error-msg/index.js';
import MainModal from '../main/index.js';

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
    };

    const team = playerCount === 'player_a_count' ? 'home' : 'away';

    try {
      const match = await handleVotes(bracketMatch, team, payload);

      playerCount === 'player_a_count'
        ? setPlayerACount(match.homeTeamScore)
        : setPlayerBCount(match.awayTeamScore);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to add votes - Part 2'));
      const nonUserMsg = 'Please login, in order to vote on this matchup.';
      console.log(err);
      err.response.status === 401
        ? setErrorMsg(nonUserMsg)
        : setErrorMsg(err.response.data.message);
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
        <>
          <center>
            <h2>
              Match {bracketMatch?.matchNumber}
              {!!matchWinner && ' - Winner'}
            </h2>
          </center>
          <$MatchupVotingWrapper className={errorMsg && 'spacing'}>
            {(matchWinner === playerA.id || !matchWinner) && (
              <$MatchupVotingSection>
                <div>
                  <$MatchupVotingImage
                    src={playerA.image_url}
                    alt={playerA.full_name}
                  />
                  <$MatchupVotingCharacter>
                    {playerA.full_name}
                  </$MatchupVotingCharacter>
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
                    <$MatchupVotingTotal>
                      Total Votes: {playerACount}
                    </$MatchupVotingTotal>
                  </div>
                )}
              </$MatchupVotingSection>
            )}
            {!matchWinner && (
              <$MatchupVotingSection>
                <$MatchupVotingVersus>VS</$MatchupVotingVersus>
              </$MatchupVotingSection>
            )}
            {(matchWinner === playerB.id || !matchWinner) && (
              <$MatchupVotingSection>
                <div>
                  <$MatchupVotingImage
                    src={playerB.image_url}
                    alt={playerB.full_name}
                  />
                  <$MatchupVotingCharacter>
                    {playerB.full_name}
                  </$MatchupVotingCharacter>
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
                    <$MatchupVotingTotal>
                      Total Votes: {playerBCount}
                    </$MatchupVotingTotal>
                  </div>
                )}
              </$MatchupVotingSection>
            )}
          </$MatchupVotingWrapper>
          {errorMsg && <ErrorMsg msg={errorMsg} />}
          <center>
            <Button
              btnText="Close"
              btnColor="cancel"
              customBtnClass="medium"
              btnFunction={closeModal}
            />
          </center>
        </>
      )}
    </MainModal>
  );
};

export default BracketVoting;