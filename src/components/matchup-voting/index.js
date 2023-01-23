import React from 'react';
import {
  $MatchupVotingCharacter,
  $MatchupVotingTeam,
  $MatchupVotingVersus,
  $MatchupVotingWrapper,
  $MatchupVotingSection,
  $MatchupVotingImage,
} from './matchupVoting.style.js';
import Button from 'Components/button';

const MatchupVoting = ({ playerA, playerB, matchup }) => {
  const { player_a_count, player_b_count, leagueName } = matchup;

  return (
    <>
      <$MatchupVotingWrapper>
        <$MatchupVotingSection>
          <$MatchupVotingImage src="/assets/profile/unknown.png" alt="Goku" />
          <$MatchupVotingCharacter>{playerA.full_name}</$MatchupVotingCharacter>
          <$MatchupVotingTeam>{leagueName}</$MatchupVotingTeam>
          <Button
            btnText={`Vote for ${playerA.name}`}
            btnColor="primary"
            customBtnClass="medium"
            btnFunction={() => alert('This functional hasn\'t been created yet')}
          />
          <div>Total Votes: {player_a_count}</div>
        </$MatchupVotingSection>
        <$MatchupVotingSection>
          <$MatchupVotingVersus>VS</$MatchupVotingVersus>
        </$MatchupVotingSection>
        <$MatchupVotingSection>
          <$MatchupVotingImage
            src="/assets/profile/unknown.png"
            alt="Sung Jin Woo"
          />
          <$MatchupVotingCharacter>{playerB.full_name}</$MatchupVotingCharacter>
          <$MatchupVotingTeam>{leagueName}</$MatchupVotingTeam>
          <Button
            btnText={`Vote for ${playerB.name}`}
            btnColor="primary"
            customBtnClass="medium"
            btnFunction={() => alert('This functional hasn\'t been created yet')}
          />
          <div>Total Votes: {player_b_count}</div>
        </$MatchupVotingSection>
      </$MatchupVotingWrapper>
    </>
  );
};

export default MatchupVoting;
