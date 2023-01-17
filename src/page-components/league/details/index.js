import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalWrapper } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/index.js';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import Error from 'PageComponents/error';
import { useAppContext } from 'src/hooks/context';

const LeagueDetails = ({ leagueId, leagueData }) => {
  const { currentUser } = useAppContext();
  const [errorPage, setErrorPage] = useState(false);
  const { teamId, matchupId } = leagueData;

  useEffect(() => {
    setErrorPage(!currentUser);
  }, [currentUser]);

  if (errorPage) {
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
            redirect={`/team/${leagueId}/${teamId}`}
          />
          <SelectionCard
            btnText="Matchup"
            redirect={`/matchup/${matchupId}`}
            isDisabled={!matchupId}
          />
          <SelectionCard
            btnText="Schedule"
            redirect="/schedule"
            isDisabled={true}
          />
          <SelectionCard
            btnText="Scoreboard"
            redirect="/scoreboard"
            isDisabled={true}
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
