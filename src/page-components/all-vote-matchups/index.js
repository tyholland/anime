import React from 'react';
import BackLink from 'Components/back-link';
import { $GlobalContainer } from 'Styles/global.style.js';
import MatchupVoting from 'Components/matchup-voting';

const AllVoteMatchups = () => {
  return (
    <>
      <BackLink />
      <$GlobalContainer>
        <MatchupVoting />
      </$GlobalContainer>
    </>
  );
};

export default AllVoteMatchups;
