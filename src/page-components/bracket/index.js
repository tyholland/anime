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

  useEffect(() => {
    if (Object.keys(router.query).length && !matches) {
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
        <$GlobalTitle>Bracket</$GlobalTitle>
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
      </$BracketContainer>
    </>
  );
};

export default Bracket;
