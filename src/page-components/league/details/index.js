import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalWrapper } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/index.js';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import Loader from 'Components/loader';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import Error from 'PageComponents/error';
import { getLeague } from 'src/requests/league';

const LeagueDetails = ({ leagueId }) => {
  const [leagueData, setLeagueData] = useState(null);
  const [errorPage, setErrorPage] = useState(false);

  const getLeagueInfo = async () => {
    setErrorPage(false);
    try {
      const data = await getLeague(leagueId);

      setLeagueData(data[0]);
    } catch (err) {
      addEvent('Error', responseError('Get league details'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    if (!leagueData) {
      getLeagueInfo();
    }
  }, [leagueData]);

  if (!leagueData && !errorPage) {
    return <Loader />;
  }

  if (!leagueData && errorPage) {
    return <Error />;
  }

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
            redirect={`/team/${leagueId}/${leagueData.teamId}`}
          />
          <SelectionCard
            btnText="Matchup"
            redirect={`/matchup/${leagueData.matchupId}`}
          />
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
