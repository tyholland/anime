import React, { useEffect, useState } from 'react';
import BackLink from 'Components/back-link';
import { $GlobalContainer } from 'Styles/global.style.js';
import MatchupVoting from 'Components/matchup-voting';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { getPlayer } from 'src/requests/player';
import Metadata from 'Components/metadata';
import Button from 'Components/button';
import { $AllVoteMatchupsEmptyWrapper } from './allVoteMatchups.style';
import { getAllMatchupVotes } from 'src/requests/matchup';
import Error from 'PageComponents/error';
import Loader from 'Components/loader';

const AllVoteMatchups = () => {
  const [totalMatchups, setTotalMatchups] = useState(null);
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);
  const [matchup, setMatchup] = useState(null);
  const [isMatchupsAvailable, setIsMatchupsAvailable] = useState(null);
  const [emptyPage, setEmptyPage] = useState(true);
  const [count, setCount] = useState(0);
  const [errorPage, setErrorPage] = useState(false);

  const getVotingMatchup = async () => {
    const nextMatchup = totalMatchups - count;

    if (nextMatchup === 0) {
      setIsMatchupsAvailable([]);
      return;
    }

    const { player_a_id, player_b_id } = isMatchupsAvailable[nextMatchup];

    try {
      const playerOne = await getPlayer(player_a_id);
      const playerTwo = await getPlayer(player_b_id);

      setPlayerA(playerOne[0]);
      setPlayerB(playerTwo[0]);
      setMatchup(isMatchupsAvailable[nextMatchup]);
      setCount(count + 1);
    } catch (err) {
      addEvent('Error', responseError(err, 'Get voting matchup'));
    }
  };

  const handleAllMatchups = async () => {
    try {
      const allMatchupVotes = await getAllMatchupVotes();

      const totalLength = allMatchupVotes.length - 1;
      const { player_a_id, player_b_id } = allMatchupVotes[totalLength];

      const playerOne = await getPlayer(player_a_id);
      const playerTwo = await getPlayer(player_b_id);

      setPlayerA(playerOne[0]);
      setPlayerB(playerTwo[0]);
      setMatchup(allMatchupVotes[totalLength]);
      setTotalMatchups(totalLength);
      setIsMatchupsAvailable(allMatchupVotes);
      setEmptyPage(false);
    } catch (err) {
      if (err.response.status === 400) {
        setMatchup([]);
        setEmptyPage(false);
        return;
      }

      addEvent(
        'Error',
        responseError(err, 'Failed to get all voting matchups')
      );
      setErrorPage(true);
    }
  };

  useEffect(() => {
    handleAllMatchups();
  }, []);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <BackLink />
      <Metadata
        title="All Matchup Voting"
        description="Vote on various matchups between characters in every rank. Your vote can help give the individual fighter that extra boost they need to win their matchup."
      />
      <$GlobalContainer>
        {!isMatchupsAvailable && <Loader />}
        {!!isMatchupsAvailable?.length && (
          <MatchupVoting
            changeMatchup={getVotingMatchup}
            playerA={playerA}
            playerB={playerB}
            matchup={matchup}
          />
        )}
        {!emptyPage && !isMatchupsAvailable?.length && (
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
