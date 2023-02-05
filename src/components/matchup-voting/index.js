import React, { useState } from 'react';
import {
  $MatchupVotingCharacter,
  $MatchupVotingTeam,
  $MatchupVotingVersus,
  $MatchupVotingWrapper,
  $MatchupVotingSection,
  $MatchupVotingImage,
  $MatchupVotingTotal,
} from './matchupVoting.style.js';
import Button from 'Components/button';
import SocialMedia from 'Components/social-media/index.js';
import { addVotes } from 'src/requests/matchup.js';
import { getCookie, responseError } from 'Utils/index.js';
import { addEvent } from 'Utils/amplitude.js';
import ErrorMsg from 'Components/error-msg/index.js';

const MatchupVoting = ({ playerA, playerB, matchup, changeMatchup }) => {
  const { player_a_count, player_b_count, leagueName, id } = matchup;
  const [playerACount, setPlayerACount] = useState(player_a_count);
  const [playerBCount, setPlayerBCount] = useState(player_b_count);
  const [errorMsg, setErrorMsg] = useState(null);
  let pathname = '';
  const socialTitle = `Matchup of the week: ${playerA.name} vs ${playerB.name}`;

  if (typeof window !== 'undefined') {
    pathname = changeMatchup
      ? `${window.location.origin}/matchup/vote/${id}`
      : window.location.href;
  }

  const handleAddingVotes = async (player, playerCount) => {
    setErrorMsg(null);
    const payload = {
      voteId: id,
      votedFor: player.id,
      playerCount,
    };

    try {
      const { votes } = await addVotes(payload, getCookie('token'));

      playerCount === 'player_a_count'
        ? setPlayerACount(votes)
        : setPlayerBCount(votes);

      addEvent('Matchup Voting', {
        votedFor: player.full_name,
        totalVotes: votes,
      });
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to add votes'));
      const nonUserMsg = 'Please login, in order to vote on this matchup.';
      err.response.status === 401
        ? setErrorMsg(nonUserMsg)
        : setErrorMsg(err.response.data.message);
    }
  };

  return (
    <>
      <$MatchupVotingWrapper className={errorMsg && 'spacing'}>
        <$MatchupVotingSection>
          <$MatchupVotingImage src="/assets/profile/unknown.png" alt="Goku" />
          <$MatchupVotingCharacter>{playerA.full_name}</$MatchupVotingCharacter>
          <$MatchupVotingTeam>{leagueName}</$MatchupVotingTeam>
          <Button
            btnText={`Vote for ${playerA.name}`}
            btnColor="primary"
            customBtnClass="medium"
            btnFunction={() => handleAddingVotes(playerA, 'player_a_count')}
          />
          <$MatchupVotingTotal>Total Votes: {playerACount}</$MatchupVotingTotal>
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
            btnFunction={() => handleAddingVotes(playerB, 'player_b_count')}
          />
          <$MatchupVotingTotal>Total Votes: {playerBCount}</$MatchupVotingTotal>
        </$MatchupVotingSection>
      </$MatchupVotingWrapper>
      {errorMsg && <ErrorMsg msg={errorMsg} />}
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
