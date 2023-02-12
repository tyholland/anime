import React, { useState } from 'react';
import BackLink from 'Components/back-link';
import { $GlobalContainer } from 'Styles/global.style.js';
import MatchupVoting from 'Components/matchup-voting';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { getPlayer } from 'src/requests/player';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { $AllVoteMatchupsEmptyWrapper } from './allVoteMatchups.style';

const AllVoteMatchups = ({ playerOne, playerTwo, allMatchupVotes }) => {
  const totalMatchups = allMatchupVotes.length - 1;
  const [playerA, setPlayerA] = useState(playerOne);
  const [playerB, setPlayerB] = useState(playerTwo);
  const [matchup, setMatchup] = useState(allMatchupVotes[totalMatchups]);
  const [isMatchupsAvailable, setIsMatchupsAvailable] =
    useState(allMatchupVotes);
  const [count, setCount] = useState(0);

  const getVotingMatchup = async () => {
    const nextMatchup = totalMatchups - count;

    if (nextMatchup === 0) {
      setIsMatchupsAvailable([]);
      return;
    }

    const { player_a_id, player_b_id } = allMatchupVotes[nextMatchup];

    try {
      const playerOne = await getPlayer(player_a_id);
      const playerTwo = await getPlayer(player_b_id);

      setPlayerA(playerOne[0]);
      setPlayerB(playerTwo[0]);
      setMatchup(allMatchupVotes[nextMatchup]);
      setCount(count + 1);
    } catch (err) {
      addEvent('Error', responseError(err, 'Get voting matchup'));
    }
  };

  return (
    <>
      <BackLink />
      <Metadata
        title="All Matchup Voting"
        description="Vote on various matchups between characters in every rank. Your vote can help give the individual fighter that extra boost they need to win their matchup."
      />
      <$GlobalContainer>
        {!!isMatchupsAvailable.length && (
          <MatchupVoting
            changeMatchup={getVotingMatchup}
            playerA={playerA}
            playerB={playerB}
            matchup={matchup}
          />
        )}
        {!isMatchupsAvailable.length && (
          <$AllVoteMatchupsEmptyWrapper>
            <div className="title">
              There are no available matchups to vote on
            </div>
            <Button
              btnText="View Your League(s)"
              redirect="/league/view"
              customBtnClass="medium"
              btnColor="primary"
            />
          </$AllVoteMatchupsEmptyWrapper>
        )}
      </$GlobalContainer>
    </>
  );
};

export default AllVoteMatchups;
