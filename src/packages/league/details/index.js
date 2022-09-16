import React from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/index.js';
import LeagueDetailsMetadata from './leagueDetailsMetadata';

const LeagueDetails = () => {
  return (
    <>
      <LeagueDetailsMetadata />
      <$GlobalContainer className="grid">
        <SelectionCard
          btnText="Your Team"
          btnTextColor="black"
          btnColor="orange"
          redirect="/team/123"
        />
        <SelectionCard
          btnText="View Matchup"
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
    </>
  );
};

export default LeagueDetails;
