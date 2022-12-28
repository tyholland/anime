import React from 'react';
import { $GlobalContainer, $GlobalWrapper } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/index.js';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';

const LeagueDetails = () => {
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
            btnTextColor="black"
            btnColor="orange"
            redirect="/team/123"
          />
          <SelectionCard
            btnText="Matchup"
            btnTextColor="black"
            btnColor="orange"
            redirect="/matchup/123"
          />
          <SelectionCard
            btnText="Schedule"
            btnTextColor="black"
            btnColor="orange"
            redirect="/schedule"
          />
          <SelectionCard
            btnText="Scoreboard"
            btnTextColor="black"
            btnColor="orange"
            redirect="/scoreboard"
          />
          <SelectionCard
            btnText="Standings"
            btnTextColor="black"
            btnColor="orange"
            redirect="/standings"
          />
          <SelectionCard
            btnText="Playoffs"
            btnTextColor="black"
            btnColor="orange"
            redirect="/playoffs"
          />
        </$GlobalContainer>
      </$GlobalWrapper>
    </>
  );
};

export default LeagueDetails;
