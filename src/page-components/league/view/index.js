import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import LeagueCard from 'Components/league-card';
import BackLink from 'Components/back-link';
import ViewLeagueMetadata from './ViewLeagueMetadata';

const ViewLeague = () => {
  return (
    <>
      <ViewLeagueMetadata />
      <BackLink />
      <$GlobalContainer>
        <$GlobalTitle>All Leagues</$GlobalTitle>
        <LeagueCard
          league="League Name"
          team="Team Name"
        />
        <LeagueCard
          league="League Name"
          team="Team Name"
        />
        <LeagueCard
          league="League Name"
          team="Team Name"
        />
        <LeagueCard
          league="League Name"
          team="Team Name"
        />
        <LeagueCard
          league="League Name"
          team="Team Name"
        />
        <LeagueCard
          league="League Name"
          team="Team Name"
        />
        <LeagueCard
          league="League Name"
          team="Team Name"
        />
      </$GlobalContainer>
    </>
  );
};

export default ViewLeague;
