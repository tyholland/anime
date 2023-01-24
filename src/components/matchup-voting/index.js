import React from 'react';
import {
  $MatchupVotingCharacter,
  $MatchupVotingTeam,
  $MatchupVotingVersus,
  $MatchupVotingWrapper,
  $MatchupVotingSection,
  $MatchupVotingImage,
  $MatchupVotingShare,
} from './matchupVoting.style.js';
import Button from 'Components/button';
import {
  EmailShareButton,
  FacebookShareButton,
  RedditShareButton,
  TwitterShareButton,
} from 'react-share';
import { EmailIcon, FacebookIcon, RedditIcon, TwitterIcon } from 'react-share';

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
      <$MatchupVotingShare>
        <div className="title">
          {changeMatchup ? 'Share Matchup' : 'Get Votes'}
        </div>
        <div className="btns">
          <FacebookShareButton
            url={pathname}
            quote={socialTitle}
            hashtag="#abzFantasyLeague"
          >
            <FacebookIcon size={50} round={true} />
          </FacebookShareButton>
          <TwitterShareButton
            url={pathname}
            title={socialTitle}
            hashtags={['abz', 'abzFantasyLeague', 'animebrothaz']}
          >
            <TwitterIcon size={50} round={true} />
          </TwitterShareButton>
          <EmailShareButton
            url={pathname}
            subject={socialTitle}
            body={`Click the link to vote on the matchup of the week: ${playerA.name} vs ${playerB.name}...`}
          >
            <EmailIcon size={50} round={true} />
          </EmailShareButton>
          <RedditShareButton url={pathname} title={socialTitle}>
            <RedditIcon size={50} round={true} />
          </RedditShareButton>
        </div>
      </$MatchupVotingShare>
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
