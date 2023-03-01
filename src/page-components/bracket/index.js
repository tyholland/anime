import React from 'react';
import Metadata from 'Components/metadata';
import TournamentBracket from 'react-svg-tournament-bracket';

const Bracket = () => {
  const matches = [
    {
      homeTeamName: 'Team A',
      awayTeamName: 'Team B',
      round: 1,
      matchNumber: 1,
    },
    {
      homeTeamName: 'Team C',
      awayTeamName: 'Team D',
      round: 1,
      matchNumber: 2,
    },
    {
      homeTeamName: 'Team E',
      awayTeamName: 'Team F',
      round: 1,
      matchNumber: 3,
    },
    {
      homeTeamName: 'Team G',
      awayTeamName: 'Team H',
      round: 1,
      matchNumber: 4,
    },
    {
      homeTeamName: 'Winner Match 1',
      awayTeamName: 'Winner Match 2',
      round: 2,
      matchNumber: 5,
    },
    {
      homeTeamName: 'Winner Match 3',
      awayTeamName: 'Winner Match 4',
      round: 2,
      matchNumber: 6,
    },
    {
      homeTeamName: 'Winner Match 5',
      awayTeamName: 'Winner Match 6',
      round: 3,
      matchNumber: 7,
    },
  ];

  return (
    <>
      <Metadata
        title="View Leagues"
        description="View all the Leagues that you are participating in. You can view your specific team for the league, view the specific weeks matchup, and all league details"
      />
      <div>
        <TournamentBracket matches={matches} width={900} />
      </div>
    </>
  );
};

export default Bracket;
