import React from 'react';
import { $GlobalContainer, $GlobalWrapper } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/index.js';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';

const LeagueDetails = ({ data, leagueId }) => {
  const { teamId, matchupId } = data[0];

  return (
    <>
      <Metadata
        title="League Details"
        description="View all league details including your team, matchup, schedule, scoreboard, standing, and the playoffs"
      />
      <$GlobalWrapper className="leagueDetail">
        <BackLink />
        <$GlobalContainer className="grid">
          <SelectionCard
            btnText="Team"
            redirect={`/team/${leagueId}/${teamId}`}
          />
          <SelectionCard btnText="Matchup" redirect={`/matchup/${matchupId}`} />
          <SelectionCard btnText="Schedule" redirect="/schedule" />
          <SelectionCard btnText="Scoreboard" redirect="/scoreboard" />
          <SelectionCard btnText="Standings" redirect="/standings" />
          <SelectionCard btnText="Playoffs" redirect="/playoffs" />
        </$GlobalContainer>
      </$GlobalWrapper>
    </>
  );
};

export default LeagueDetails;
