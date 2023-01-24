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
import SocialMedia from 'Components/social-media/index.js';

const MatchupVoting = ({ playerA, playerB, matchup, changeMatchup }) => {
  const { player_a_count, player_b_count, leagueName, id } = matchup;
  let pathname = '';
  const socialTitle = `Matchup of the week: ${playerA.name} vs ${playerB.name}`;

  if (typeof window !== 'undefined') {
    pathname = changeMatchup
      ? `${window.location.origin}/matchup/vote/${id}`
      : window.location.href;
  }

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
      <SocialMedia
        pageTitle={changeMatchup ? 'Share Matchup' : 'Get Votes'}
        title={socialTitle}
        description={`Click the link to vote on the matchup of the week: ${playerA.name} vs ${playerB.name}...`}
        singleHashtag="#abzFantasyLeague"
        pluralHashtags={['abz', 'abzFantasyLeague', 'animebrothaz']}
        url={pathname}
      />
      {!!changeMatchup && (
        <$MatchupVotingWrapper>
          <Button
            btnText="Next Matchup"
            btnColor="secondary"
            customBtnClass="medium"
            btnFunction={changeMatchup}
          />
        </$MatchupVotingWrapper>
      )}
    </>
  );
};

export default MatchupVoting;
