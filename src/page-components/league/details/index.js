import React from 'react';
import { $GlobalContainer, $GlobalWrapper } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/index.js';
import LeagueDetailsMetadata from './leagueDetailsMetadata';
import BackLink from 'Components/back-link';

const LeagueDetails = () => {
  return (
    <>
      <LeagueDetailsMetadata />
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
