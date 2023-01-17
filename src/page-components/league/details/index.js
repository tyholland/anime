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
import { getMatchUpFromTeamId } from 'src/requests/matchup';
import { useAppContext } from 'src/hooks/context';

const LeagueDetails = ({ leagueId }) => {
  const { currentUser } = useAppContext();
  const [leagueData, setLeagueData] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getLeagueInfo = async () => {
    if (!currentUser) {
      setIsLoading(false);
      setErrorPage(true);
      return;
    }

    try {
      const data = await getLeague(leagueId);
      const matchupData = await getMatchUpFromTeamId(data[0].teamId);

      setLeagueData({
        ...data[0],
        ...matchupData[0],
      });
      setIsLoading(false);
    } catch (err) {
      addEvent('Error', responseError(err, 'Get league details'));
      setErrorPage(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!leagueData) {
      getLeagueInfo();
    }
  }, [leagueData, currentUser]);

  if (errorPage) {
    return <Error />;
  }

  if (isLoading) {
    return <Loader />;
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
            isDisabled={!leagueData.matchupId}
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
