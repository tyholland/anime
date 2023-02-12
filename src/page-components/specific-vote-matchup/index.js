import MatchupVoting from 'Components/matchup-voting';
import Metadata from 'Components/metadata';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style.js';

const SpecificVoteMatchup = ({ playerA, playerB, matchupVotes }) => {
  return (
    <>
      <Metadata
        title="Matchup Voting"
        description="Vote on this matchup between two characters. Your vote can help give the individual fighter that extra boost they need to win their matchup."
      />
      <$GlobalContainer>
        <MatchupVoting
          playerA={playerA}
          playerB={playerB}
          matchup={matchupVotes}
        />
      </$GlobalContainer>
    </>
  );
};

export default SpecificVoteMatchup;
