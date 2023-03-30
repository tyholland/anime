import React, { useEffect, useState } from 'react';
import { $GlobalContainer } from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/index.js';
import Metadata from 'Components/metadata';
import { useAppContext } from 'src/hooks/context';
import { responseError } from 'Utils/index';
import { useRouter } from 'next/router';
import { getLeague } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import Error from 'PageComponents/error';
import Loader from 'Components/loader';
import NotUser from 'Components/not-user';

const League = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [account, setAccount] = useState(null);
  const [leagueData, setLeagueData] = useState(null);
  const [isDraftActive, setIsDraftActive] = useState(null);
  const [leagueId, setLeagueId] = useState(null);
  const [errorPage, setErrorPage] = useState(false);

  const handleLeagueData = async () => {
    const { league_id } = router.query;

    try {
      const { leagueData, matchupData, hasDraft } = await getLeague(
        league_id,
        currentUser?.token
      );

      setLeagueId(league_id);
      setIsDraftActive(hasDraft);
      setLeagueData({
        ...leagueData[0],
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
    if (Object.keys(router.query).length > 0 && !!account) {
      handleLeagueData();
    }
  }, [router.query, account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="League Details"
        description="View all league details including your team, matchup, schedule, scoreboard, standing, and the playoffs"
      />
      {!account && <NotUser />}
      {account && (
        <$GlobalContainer className="bgImage leagueDetail">
          {!leagueData && <Loader />}
          {leagueData && (
            <>
              <div className="buttonGrid">
                {account?.user_id === leagueData.creator_id && (
                  <SelectionCard
                    btnText="Admin Settings"
                    redirect={`/league/admin?league_id=${leagueId}`}
                  />
                )}
                {isDraftActive && (
                  <SelectionCard
                    btnText="Draft"
                    redirect={`/draft?league_id=${leagueId}`}
                  />
                )}
                <SelectionCard
                  btnText="Team"
                  redirect={`/team?team_id=${leagueData.teamId}`}
                />
                <SelectionCard
                  btnText="Matchup"
                  redirect={`/matchup?matchup_id=${leagueData.matchupId}`}
                  isDisabled={!leagueData.week > 0}
                />
                <SelectionCard
                  btnText="Schedule"
                  redirect={`/schedule?league_id=${leagueId}`}
                  isDisabled={!leagueData.week > 0}
                />
                <SelectionCard
                  btnText="Scoreboard"
                  redirect={`/scoreboard?league_id=${leagueId}`}
                  isDisabled={!leagueData.week > 0}
                />
                <SelectionCard
                  btnText="Standings"
                  redirect={`/standings?league_id=${leagueId}`}
                  isDisabled={!leagueData.week > 0}
                />
                <SelectionCard
                  btnText="Playoffs"
                  redirect={`/playoffs?league_id=${leagueId}`}
                  isDisabled={!leagueData.week > 0}
                />
              </div>
            </>
          )}
        </$GlobalContainer>
      )}
    </>
  );
};

export default League;
