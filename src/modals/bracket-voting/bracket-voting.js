import React, { useEffect, useState } from 'react';
import * as Styles from './bracketVoting.style.js';
import Button from 'Components/button/button.js';
import { getNonLoggedInUser, responseError } from 'Utils/index.js';
import { addEvent } from 'Utils/amplitude.js';
import ErrorMsg from 'Components/error-msg/error-msg.js';
import MainModal from '../main/main.js';
import { useAppContext } from 'src/hooks/user.js';

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
          <Styles.BracketVotingWrapper
            className={`${errorMsg && 'spacing'}${!matchWinner && ' duo'}`}
          >
            {(matchWinner === playerA.id || !matchWinner) && (
              <Styles.BracketVotingSection>
                <div>
                  <Styles.BracketVotingImage
                    src={playerA.image_url}
                    alt={playerA.full_name}
                  />
                  <Styles.BracketVotingCharacter>
                    {playerA.full_name}
                  </Styles.BracketVotingCharacter>
                  {matchWinner === playerA.id && (
                    <Styles.BracketVotingTotal>
                      Total Votes: {playerACount}
                    </Styles.BracketVotingTotal>
                  )}
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
                    <Styles.BracketVotingTotal>
                      Total Votes: {playerACount}
                    </Styles.BracketVotingTotal>
                  </div>
                )}
              </Styles.BracketVotingSection>
            )}
            {!matchWinner && (
              <Styles.BracketVotingSection className="versus">
                <Styles.BracketVotingVersus>VS</Styles.BracketVotingVersus>
              </Styles.BracketVotingSection>
            )}
            {(matchWinner === playerB.id || !matchWinner) && (
              <Styles.BracketVotingSection>
                <div>
                  <Styles.BracketVotingImage
                    src={playerB.image_url}
                    alt={playerB.full_name}
                  />
                  <Styles.BracketVotingCharacter>
                    {playerB.full_name}
                  </Styles.BracketVotingCharacter>
                  {matchWinner === playerB.id && (
                    <Styles.BracketVotingTotal>
                      Total Votes: {playerBCount}
                    </Styles.BracketVotingTotal>
                  )}
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
                    <Styles.BracketVotingTotal>
                      Total Votes: {playerBCount}
                    </Styles.BracketVotingTotal>
                  </div>
                )}
              </Styles.BracketVotingSection>
            )}
          </Styles.BracketVotingWrapper>
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
