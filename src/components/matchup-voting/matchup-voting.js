import React, { useEffect, useState } from 'react';
import * as Styles from './matchupVoting.style.js';
import Button from 'Components/button/button.js';
import SocialMedia from 'Components/social-media/social-media.js';
import { addVotes } from 'src/requests/matchup.js';
import { getNonLoggedInUser, responseError } from 'Utils/index.js';
import { addEvent } from 'Utils/amplitude.js';
import ErrorMsg from 'Components/error-msg/error-msg.js';
import { useAppContext } from 'src/hooks/context.js';
import Loader from 'Components/loader/loader.js';
import { addBracketVotes } from 'src/requests/bracket.js';

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

  const handleAddingVotes = async (player, playerCount, voteType) => {
    setErrorMsg(null);

    const payload = {
      voteId,
      votedFor: player.id,
      playerCount,
      userId: currentUser?.user_id || getNonLoggedInUser(),
    };

    try {
      let voteTally = 0;

      if (voteType === 0) {
        const { votes } = await addVotes(payload);
        voteTally = votes;
      } else {
        const { votes } = await addBracketVotes(payload);
        voteTally = votes;
      }

      playerCount === 'player_a_count'
        ? setPlayerACount(voteTally)
        : setPlayerBCount(voteTally);

      addEvent('Matchup Voting', {
        votedFor: player.full_name,
        totalVotes: voteTally,
        userId: currentUser?.user_id
      });
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to add votes'));
      setErrorMsg(err.response.data.message);
    }
  };

  const handleMatchup = (matchup) => {
    const { player_a_count, player_b_count, id, teamA, teamB, leagueName, is_bracket, bracket } =
      matchup;

    setPlayerA(userPlayerA);
    setPlayerB(userPlayerB);
    setPlayerACount(player_a_count);
    setPlayerBCount(player_b_count);
    setPlayerInfo({
      teamA,
      teamB,
      leagueName,
      is_bracket,
      bracket
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
      <Styles.MatchupVotingWrapper className={errorMsg && 'spacing'}>
        <Styles.MatchupVotingSection>
          <div>
            <Styles.MatchupVotingImage
              src={playerA.image_url}
              alt={playerA.full_name}
            />
            <Styles.MatchupVotingCharacter>
              {playerA.full_name}
            </Styles.MatchupVotingCharacter>
            {playerInfo.is_bracket === 0 && (
              <>
                <Styles.MatchupVotingCharacter className="details">
                  <strong>Team:</strong> {playerInfo.teamA}
                </Styles.MatchupVotingCharacter>
                <Styles.MatchupVotingCharacter className="details">
                  <strong>League:</strong> {playerInfo.leagueName}
                </Styles.MatchupVotingCharacter>
              </>
            )}
            {playerInfo.is_bracket === 1 && (
              <Styles.MatchupVotingCharacter className="details">
                <strong>Bracket:</strong> {playerInfo.bracket}
              </Styles.MatchupVotingCharacter>
            )}
          </div>
          <div>
            <Button
              btnText={`Vote for ${playerA.name}`}
              btnColor="primary"
              customBtnClass="medium"
              btnFunction={() => handleAddingVotes(playerA, 'player_a_count', playerInfo.is_bracket)}
            />
            <Styles.MatchupVotingTotal>
              Total Votes: {playerACount}
            </Styles.MatchupVotingTotal>
          </div>
        </Styles.MatchupVotingSection>
        <Styles.MatchupVotingSection>
          <Styles.MatchupVotingVersus>VS</Styles.MatchupVotingVersus>
        </Styles.MatchupVotingSection>
        <Styles.MatchupVotingSection>
          <div>
            <Styles.MatchupVotingImage
              src={playerB.image_url}
              alt={playerB.full_name}
            />
            <Styles.MatchupVotingCharacter>
              {playerB.full_name}
            </Styles.MatchupVotingCharacter>
            {playerInfo.is_bracket === 0 && (
              <>
                <Styles.MatchupVotingCharacter className="details">
                  <strong>Team:</strong> {playerInfo.teamB}
                </Styles.MatchupVotingCharacter>
                <Styles.MatchupVotingCharacter className="details">
                  <strong>League:</strong> {playerInfo.leagueName}
                </Styles.MatchupVotingCharacter>
              </>
            )}
            {playerInfo.is_bracket === 1 && (
              <Styles.MatchupVotingCharacter className="details">
                <strong>Bracket:</strong> {playerInfo.bracket}
              </Styles.MatchupVotingCharacter>
            )}
          </div>
          <div>
            <Button
              btnText={`Vote for ${playerB.name}`}
              btnColor="primary"
              customBtnClass="medium"
              btnFunction={() => handleAddingVotes(playerB, 'player_b_count', playerInfo.is_bracket)}
            />
            <Styles.MatchupVotingTotal>
              Total Votes: {playerBCount}
            </Styles.MatchupVotingTotal>
          </div>
        </Styles.MatchupVotingSection>
      </Styles.MatchupVotingWrapper>
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
        <Styles.MatchupVotingWrapper className="btn">
          <Button
            btnText="Next Matchup"
            btnColor="secondary"
            customBtnClass="medium"
            btnFunction={changeMatchup}
          />
        </Styles.MatchupVotingWrapper>
      )}
      {!isChangeable && (
        <Styles.MatchupVotingWrapper className="btnRedirect">
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
        </Styles.MatchupVotingWrapper>
      )}
    </>
  );
};

export default MatchupVoting;
