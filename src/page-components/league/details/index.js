import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalWrapper } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/index.js';
import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import { useAppContext } from 'src/hooks/context';
import { getCookie, responseError } from 'Utils/index';
import { useRouter } from 'next/router';
import { getLeague } from 'src/requests/league';
import { getMatchUpFromTeamId } from 'src/requests/matchup';
import { addEvent } from 'Utils/amplitude';
import Error from 'PageComponents/error';
import Loader from 'Components/loader';

const LeagueDetails = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [account, setAccount] = useState(null);
  const [leagueData, setLeagueData] = useState(null);
  const [leagueId, setLeagueId] = useState(null);
  const [errorPage, setErrorPage] = useState(false);

  const handleLeagueData = async () => {
    const { league_id } = router.query;

    try {
      const data = await getLeague(league_id, getCookie('token'));
      const matchupData = await getMatchUpFromTeamId(
        data[0].teamId,
        getCookie('token')
      );

      setLeagueId(league_id);
      setLeagueData({
        ...data[0],
        ...matchupData[0],
      });
    } catch (err) {
      addEvent(
        'Error',
        responseError(err, 'Failed to get league and matchup data')
      );
      setErrorPage(true);
    }
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(router.query).length) {
      handleLeagueData();
    }
  }, [router.query]);

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
        {!leagueData && <Loader />}
        {leagueData && (
          <$GlobalContainer className="grid">
            {account?.user_id === leagueData.creator_id && (
              <SelectionCard
                btnText="Admin Settings"
                redirect="/league/admin"
              />
            )}
            <SelectionCard
              btnText="Team"
              redirect={`/team/${leagueData.teamId}`}
            />
            <SelectionCard
              btnText="Matchup"
              redirect={`/matchup/${leagueData.matchupId}`}
              isDisabled={!leagueData.matchupId}
            />
            <SelectionCard
              btnText="Schedule"
              redirect={`/schedule/${leagueId}`}
              isDisabled={!leagueData.matchupId}
            />
            <SelectionCard
              btnText="Scoreboard"
              redirect={`/scoreboard/${leagueId}`}
              isDisabled={!leagueData.matchupId}
            />
            <SelectionCard
              btnText="Standings"
              redirect={`/standings/${leagueId}`}
              isDisabled={!leagueData.matchupId}
            />
            <SelectionCard
              btnText="Playoffs"
              redirect={`/playoffs/${leagueId}`}
              isDisabled={!leagueData.matchupId}
            />
          </$GlobalContainer>
        )}
      </$GlobalWrapper>
    </>
  );
};

export default LeagueDetails;
