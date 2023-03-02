import React, { useEffect, useState } from 'react';
import Metadata from 'Components/metadata';
import TournamentBracket from 'react-svg-tournament-bracket';
import { getBracket } from 'src/requests/bracket';
import { useRouter } from 'next/router';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { useAppContext } from 'src/hooks/context';
import { addVotes } from 'src/requests/bracket';
import { $BracketWrapper } from './bracket.style';

const Bracket = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [matches, setMatches] = useState(null);
  const [winWidth, setWinWidth] = useState(0);

  if (typeof window !== 'undefined') {
    if (!winWidth) {
      setWinWidth(window.innerWidth);
    }
    window.onresize = () => setWinWidth(window.innerWidth);
  }

  const handleBracketDisplay = async () => {
    const { bracket_id } = router.query;

    try {
      const { allMatches } = await getBracket(bracket_id);

      setMatches(allMatches);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get bracket data'));
    }
  };

  const handleMatchDisplay = (match) => {
    const { awayTeamName, awayTeamScore, homeTeamName, homeTeamScore } = match;

    console.log(
      `${homeTeamName} vs ${awayTeamName} (${homeTeamScore} - ${awayTeamScore})`
    );
  };

  const handleVotes = async (match, team) => {
    const playerId = match[`${team}TeamId`];
    const score = match[`${team}TeamScore`];
    const payload = {
      voteId: match.voteId,
      votedFor: playerId,
      playerCount: team === 'home' ? 'player_a_count' : 'player_b_count',
    };

    try {
      await addVotes(payload, currentUser?.token);

      const updateMatch = matches.findIndex(
        (obj) => obj.matchNumber == match.matchNumber
      );

      matches[updateMatch][`${team}TeamScore`] = score + 1;
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to add votes'));
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length && !matches) {
      handleBracketDisplay();
    }
  }, [router.query, winWidth]);

  return (
    <>
      <Metadata
        title="Bracket"
        description="View all the Leagues that you are participating in. You can view your specific team for the league, view the specific weeks matchup, and all league details"
      />
      {matches && (
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
      )}
    </>
  );
};

export default Bracket;
