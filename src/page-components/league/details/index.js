import React from 'react';
import { $GlobalContainer, $GlobalWrapper } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/index.js';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';

const LeagueDetails = ({ leagueId, leagueData }) => {
  const { teamId, matchupId } = leagueData;

  return (
    <>
      <Metadata
        title="League Details"
        description="View all league details including your team, matchup, schedule, scoreboard, standing, and the playoffs"
      />
      <$GlobalWrapper className="leagueDetail">
        <BackLink />
        <$GlobalContainer className="grid">
          <SelectionCard btnText="Team" redirect={`/team/${teamId}`} />
          <SelectionCard
            btnText="Matchup"
            redirect={`/matchup/${matchupId}`}
            isDisabled={!matchupId}
          />
          <SelectionCard
            btnText="Schedule"
            redirect={`/schedule/${leagueId}`}
            isDisabled={!matchupId}
          />
          <SelectionCard
            btnText="Scoreboard"
            redirect={`/scoreboard/${leagueId}`}
            isDisabled={!matchupId}
          />
          <SelectionCard
            btnText="Standings"
            redirect="/standings"
            isDisabled={true}
          />
          <SelectionCard
            btnText="Playoffs"
            redirect="/playoffs"
            isDisabled={true}
          />
        </$GlobalContainer>
      </$GlobalWrapper>
    </>
  );
};

export default LeagueDetails;
