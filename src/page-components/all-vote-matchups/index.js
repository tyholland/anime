import React, { useState } from 'react';
import BackLink from 'Components/back-link';
import { $GlobalContainer } from 'Styles/global.style.js';
import MatchupVoting from 'Components/matchup-voting';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { getPlayer } from 'src/requests/player';

const AllVoteMatchups = ({ playerOne, playerTwo, allMatchupVotes }) => {
  const totalMatchups = allMatchupVotes.length - 1;
  const [playerA, setPlayerA] = useState(playerOne);
  const [playerB, setPlayerB] = useState(playerTwo);
  const [matchup, setMatchuo] = useState(allMatchupVotes[totalMatchups]);
  const [count, setCount] = useState(0);

  const getVotingMatchup = async () => {
    const nextMatchup = totalMatchups - count;

    if (nextMatchup < 0) {
      console.log('no more matchups');
      return;
    }

    const { player_a_id, player_b_id } = allMatchupVotes[nextMatchup];

    try {
      const playerOne = await getPlayer(player_a_id);
      const playerTwo = await getPlayer(player_b_id);

      setPlayerA(playerOne[0]);
      setPlayerB(playerTwo[0]);
      setMatchuo(allMatchupVotes[nextMatchup]);
      setCount(count + 1);
    } catch (err) {
      addEvent('Error', responseError(err, 'Get voting matchup'));
    }
  };

  return (
    <>
      <BackLink />
      <$GlobalContainer>
        <MatchupVoting
          changeMatchup={getVotingMatchup}
          playerA={playerA}
          playerB={playerB}
          matchup={matchup}
        />
      </$GlobalContainer>
    </>
  );
};

export default AllVoteMatchups;
