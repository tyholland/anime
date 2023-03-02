import React, { useEffect, useState } from 'react';
import Metadata from 'Components/metadata';
import TournamentBracket from 'react-svg-tournament-bracket';
import { getBracket } from 'src/requests/bracket';
import { useRouter } from 'next/router';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

const Bracket = () => {
  const router = useRouter();
  const [matches, setMatches] = useState(null);
  const winWidth = typeof window !== 'undefined' && window.innerWidth;

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

  const handleVotes = (match, team) => {
    const teamName = match[`${team}TeamName`];
    const teamId = match[`${team}TeamId`];
    const score = match[`${team}TeamScore`];

    console.log(`${teamName} - id: ${teamId} - score: ${score}`);
  };

  useEffect(() => {
    if (Object.keys(router.query).length) {
      handleBracketDisplay();
    }
  }, [router.query]);

  return (
    <>
      <Metadata
        title="Bracket"
        description="View all the Leagues that you are participating in. You can view your specific team for the league, view the specific weeks matchup, and all league details"
      />
      {matches && (
        <div>
          <TournamentBracket
            matches={matches}
            width={winWidth - 30}
            height={1100}
            disableStrictBracketSizing={true}
            hidePKs={true}
            orientation="portrait"
            onSelectMatch={(match) => handleMatchDisplay(match)}
            onSelectTeam={(match, team) => handleVotes(match, team)}
          />
        </div>
      )}
    </>
  );
};

export default Bracket;
