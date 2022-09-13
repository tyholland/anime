import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import LeagueCard from 'Components/league-card';
import BackLink from 'Components/back-link';
import ViewLeagueMetadata from './ViewLeagueMetadata';

const ViewLeague = ({ setPage, setHasHeader }) => {
  return (
    <>
      <ViewLeagueMetadata />
      <$GlobalContainer>
        <BackLink redirect="/league" />
        <$GlobalTitle>Your Leagues</$GlobalTitle>
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
