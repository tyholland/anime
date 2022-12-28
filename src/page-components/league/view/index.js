import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import LeagueCard from 'Components/league-card';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';

const ViewLeague = () => {
  return (
    <>
      <Metadata
        title="View Leagues"
        description="View all the Leagues that you are participating in. You can view your specific team for the league, view the specific weeks matchup, and all league details"
      />
      <BackLink />
      <$GlobalContainer>
        <$GlobalTitle>All Leagues</$GlobalTitle>
        <LeagueCard league="League Name" team="Team Name" />
        <LeagueCard league="League Name" team="Team Name" />
        <LeagueCard league="League Name" team="Team Name" />
        <LeagueCard league="League Name" team="Team Name" />
        <LeagueCard league="League Name" team="Team Name" />
        <LeagueCard league="League Name" team="Team Name" />
        <LeagueCard league="League Name" team="Team Name" />
      </$GlobalContainer>
    </>
  );
};

export default ViewLeague;
