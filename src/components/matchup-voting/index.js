import React, { useEffect, useState } from 'react';
import {
  $MatchupVotingCharacter,
  $MatchupVotingVersus,
  $MatchupVotingWrapper,
  $MatchupVotingSection,
  $MatchupVotingImage,
  $MatchupVotingTotal,
} from './matchupVoting.style.js';
import Button from 'Components/button';
import SocialMedia from 'Components/social-media/index.js';
import { addVotes } from 'src/requests/matchup.js';
import { getNonLoggedInUser, responseError } from 'Utils/index.js';
import { addEvent } from 'Utils/amplitude.js';
import ErrorMsg from 'Components/error-msg/index.js';
import { useAppContext } from 'src/hooks/context.js';
import Loader from 'Components/loader/index.js';

const MatchupVoting = ({
  userPlayerA,
  userPlayerB,
  matchup,
  changeMatchup,
  isChangeable = false,
}) => {
  const { currentUser } = useAppContext();
  const [playerACount, setPlayerACount] = useState(null);
  const [playerBCount, setPlayerBCount] = useState(null);
  const [playerA, setPlayerA] = useState(null);
  const [playerB, setPlayerB] = useState(null);
  const [playerInfo, setPlayerInfo] = useState(null);
  const [voteId, setVoteId] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  let pathname = '';

  if (typeof window !== 'undefined') {
    pathname = isChangeable
      ? `${window.location.origin}/matchup/vote?vote_id=${matchup.id}`
      : window.location.href;
  }

  const handleAddingVotes = async (player, playerCount) => {
    setErrorMsg(null);

    const payload = {
      voteId,
      votedFor: player.id,
      playerCount,
      userId: currentUser?.user_id || getNonLoggedInUser(),
    };

    try {
      const { votes } = await addVotes(payload);

      playerCount === 'player_a_count'
        ? setPlayerACount(votes)
        : setPlayerBCount(votes);

      addEvent('Matchup Voting', {
        votedFor: player.full_name,
        totalVotes: votes,
      });
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to add votes'));
      setErrorMsg(err.response.data.message);
    }
  };

  const handleMatchup = (matchup) => {
    const { player_a_count, player_b_count, id, teamA, teamB, leagueName } =
      matchup;

    setPlayerA(userPlayerA);
    setPlayerB(userPlayerB);
    setPlayerACount(player_a_count);
    setPlayerBCount(player_b_count);
    setPlayerInfo({
      teamA,
      teamB,
      leagueName,
    });
    setVoteId(id);
  };

  useEffect(() => {
    handleMatchup(matchup);
  }, [matchup]);

  if (!playerA) {
    return <Loader />;
  }

  return (
    <>
      <$MatchupVotingWrapper className={errorMsg && 'spacing'}>
        <$MatchupVotingSection>
          <div>
            <$MatchupVotingImage
              src={playerA.image_url}
              alt={playerA.full_name}
            />
            <$MatchupVotingCharacter>
              {playerA.full_name}
            </$MatchupVotingCharacter>
            <$MatchupVotingCharacter className="details">
              <strong>Team:</strong> {playerInfo.teamA}
            </$MatchupVotingCharacter>
            <$MatchupVotingCharacter className="details">
              <strong>League:</strong> {playerInfo.leagueName}
            </$MatchupVotingCharacter>
          </div>
          <div>
            <Button
              btnText={`Vote for ${playerA.name}`}
              btnColor="primary"
              customBtnClass="medium"
              btnFunction={() => handleAddingVotes(playerA, 'player_a_count')}
            />
            <$MatchupVotingTotal>
              Total Votes: {playerACount}
            </$MatchupVotingTotal>
          </div>
        </$MatchupVotingSection>
        <$MatchupVotingSection>
          <$MatchupVotingVersus>VS</$MatchupVotingVersus>
        </$MatchupVotingSection>
        <$MatchupVotingSection>
          <div>
            <$MatchupVotingImage
              src={playerB.image_url}
              alt={playerB.full_name}
            />
            <$MatchupVotingCharacter>
              {playerB.full_name}
            </$MatchupVotingCharacter>
            <$MatchupVotingCharacter className="details">
              <strong>Team:</strong> {playerInfo.teamB}
            </$MatchupVotingCharacter>
            <$MatchupVotingCharacter className="details">
              <strong>League:</strong> {playerInfo.leagueName}
            </$MatchupVotingCharacter>
          </div>
          <div>
            <Button
              btnText={`Vote for ${playerB.name}`}
              btnColor="primary"
              customBtnClass="medium"
              btnFunction={() => handleAddingVotes(playerB, 'player_b_count')}
            />
            <$MatchupVotingTotal>
              Total Votes: {playerBCount}
            </$MatchupVotingTotal>
          </div>
        </$MatchupVotingSection>
      </$MatchupVotingWrapper>
      {errorMsg && <ErrorMsg msg={errorMsg} />}
      <SocialMedia
        pageTitle={isChangeable ? 'Share Matchup' : 'Get Votes'}
        title={`Matchup of the week: ${playerA.name} vs ${playerB.name}`}
        description={`Click the link to vote on the matchup of the week: ${playerA.name} vs ${playerB.name}...`}
        singleHashtag="#animeFantasyLeague"
        pluralHashtags={['afl', 'animeFantasyLeague', 'aflFantasyLeague']}
        url={pathname}
      />
      {!!isChangeable && (
        <$MatchupVotingWrapper className="btn">
          <Button
            btnText="Next Matchup"
            btnColor="secondary"
            customBtnClass="medium"
            btnFunction={changeMatchup}
          />
        </$MatchupVotingWrapper>
      )}
      {!isChangeable && (
        <$MatchupVotingWrapper className="btnRedirect">
          <Button
            btnText="Vote on more Matchups"
            btnColor="secondary"
            customBtnClass="medium"
            redirect={'/matchup/all'}
          />
          <Button
            btnText="Back to Matchup"
            btnColor="secondary"
            customBtnClass="medium"
            redirect={`/matchup?matchup_id=${matchup.matchup_id}`}
          />
        </$MatchupVotingWrapper>
      )}
    </>
  );
};

export default MatchupVoting;
