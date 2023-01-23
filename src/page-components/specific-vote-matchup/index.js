import MatchupVoting from 'Components/matchup-voting';
import Metadata from 'Components/metadata';
import React from 'react';
import { $GlobalContainer } from 'Styles/global.style.js';

const SpecificVoteMatchup = ({ playerA, playerB, matchupVotes }) => {
  return (
    <>
      <Metadata
        title={`Matchup Voting for ${playerA.name} vs ${playerB.name}`}
        description={`Vote on this matchup between ${playerA.name} and ${playerB.name}. Your vote can help give the individual fighter that extra boost they need to win their matchup.`}
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
