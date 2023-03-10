import React, { useEffect, useState } from 'react';
import Metadata from 'Components/metadata';
import TournamentBracket from 'react-svg-tournament-bracket';
import { getBracket } from 'src/requests/bracket';
import { useRouter } from 'next/router';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { useAppContext } from 'src/hooks/context';
import { addVotes } from 'src/requests/bracket';
import { $BracketWrapper, $BracketContainer } from './bracket.style';
import SocialMedia from 'Components/social-media';
import Notification from 'src/modals/notification';
import { $GlobalTitle } from 'Styles/global.style';
import Error from 'PageComponents/error';
import Button from 'Components/button';

const Bracket = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [matches, setMatches] = useState(null);
  const [winWidth, setWinWidth] = useState(0);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalMsg, setModalMsg] = useState(null);
  const [errorPage, setErrorPage] = useState(null);
  let pathname = '';

  if (typeof window !== 'undefined') {
    pathname = window.location.href;

    if (!winWidth) {
      setWinWidth(window.innerWidth);
    }
    window.onresize = () => setWinWidth(window.innerWidth);
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleBracketDisplay = async () => {
    const { bracket_id } = router.query;

    try {
      const { allMatches } = await getBracket(bracket_id);

      setMatches(allMatches);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get bracket data'));
      setErrorPage(true);
    }
  };

  const handleMatchDisplay = (match) => {
    const {
      awayTeamName,
      awayTeamScore,
      homeTeamName,
      homeTeamScore,
      matchNumber,
    } = match;

    const message = `Matchup #${matchNumber} between ${homeTeamName} and ${awayTeamName}. ${homeTeamName} has ${homeTeamScore} votes. ${awayTeamName} has ${awayTeamScore} votes.`;

    setModalMsg(message);
    setModalIsOpen(true);
  };

  const handleVotes = async (match, team) => {
    const playerId = match[`${team}TeamId`];
    const score = match[`${team}TeamScore`];
    const payload = {
      voteId: match.voteId,
      votedFor: playerId,
      playerCount: team === 'home' ? 'player_a_count' : 'player_b_count',
    };

    if (!match.voteId) {
      setModalMsg(
        `Round ${match.round} has not started yet. Voting is disabled until the round ${match.round} starts`
      );
      setModalIsOpen(true);
      return;
    }

    try {
      await addVotes(payload, currentUser?.token);

      const updateMatch = matches.findIndex(
        (obj) => obj.matchNumber == match.matchNumber
      );

      matches[updateMatch][`${team}TeamScore`] = score + 1;

      addEvent('Bracket Voting', {
        votedFor: match[`${team}TeamName`],
        totalVotes: score + 1,
      });
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to add votes'));
      setModalMsg(err.response.data.message);
      setModalIsOpen(true);
    }
  };

  const handleRules = () => {
    const msg = (
      <div>
        Welcome to the ABZ Bracket. The rules for the Bracket are very simple.
        <p>
          First of all, every Bracket's first round starts on the Sunday
          following the creation of the Bracket. So, if you are unable to vote
          on the matchups in the first round, you will most likely need to wait
          until the following Sunday when the first round becomes active.
        </p>
        <p>
          After the first round becomes active, the second round will become
          active after the next Sunday, and then the first round will become
          inactive. Each round, including the championship round, will last only
          one week, so make sure to get all your votes in as soon as possible.
        </p>
        <p>
          You can vote on a specific matchup. If you click on a character in a
          matchup, that means you are voting for that character to win. Once you
          click on a character, you will no longer be able to vote on that
          specific matchup anymore.
        </p>
        <p>
          You can view matchup details by clicking on the number in between both
          characters in a matchup. A modal will pop up with all the details for
          that matchup.
        </p>
        <p>
          You can click on a round that isn't ready to be voted on, but you will
          get an error message. You have to wait for that round to be active in
          order to make any votes.
        </p>
      </div>
    );

    setModalMsg(msg);
    setModalIsOpen(true);
  };

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !matches) {
      handleBracketDisplay();
    }
  }, [router.query, winWidth]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Bracket"
        description="Your ABZ Bracket shows all the head-to-head matchups that you want people to vote on. Share your bracket will all your friends or on your social media accounts."
      />
      <$BracketContainer>
        <$GlobalTitle className="bracket">
          Bracket
          <Button
            btnText="?"
            btnColor="secondary"
            btnFunction={handleRules}
            customBtnClass="small"
          />
        </$GlobalTitle>
        {matches && (
          <>
            <$BracketWrapper>
              <TournamentBracket
                matches={matches}
                width={winWidth > 1200 ? 1170 : winWidth - 30}
                height={1200}
                disableStrictBracketSizing={true}
                hidePKs={true}
                orientation={winWidth < 900 ? 'portrait' : 'landscape'}
                onSelectMatch={(match) => handleMatchDisplay(match)}
                onSelectTeam={(match, team) => handleVotes(match, team)}
              />
            </$BracketWrapper>
            <$BracketWrapper>
              <SocialMedia
                pageTitle="ABZ Bracket"
                title="Anime Bracket matchups"
                description="Bracket features some great anime head-to-head matchups"
                singleHashtag="#abzBracket"
                pluralHashtags={['abz', 'abzBracket', 'animebrothaz']}
                url={pathname}
              />
            </$BracketWrapper>
            <Notification
              message={modalMsg}
              closeModal={closeModal}
              modalIsOpen={modalIsOpen}
            />
          </>
        )}
        <Notification
          message={modalMsg}
          closeModal={closeModal}
          modalIsOpen={modalIsOpen}
        />
      </$BracketContainer>
    </>
  );
};

export default Bracket;
