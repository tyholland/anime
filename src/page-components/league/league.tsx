import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import SelectionCard from 'Components/selection-card/selection-card';
import Metadata from 'Components/metadata/metadata';
import { useUserContext } from 'Hooks/user';
import { responseError } from 'Utils/index';
import { useRouter } from 'next/router';
import { getLeague } from 'Requests/league';
import { addEvent } from 'Utils/amplitude';
import Error from 'PageComponents/error/error';
import Loader from 'Components/loader/loader';
import NotUser from 'Components/not-user/not-user';
import LeagueChamp from 'Components/league-champ/league-champ';

const League = () => {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const [account, setAccount] = useState<Record<string, any>>(null);
  const [leagueData, setLeagueData] = useState<Record<string, any>>(null);
  const [isDraftActive, setIsDraftActive] = useState<boolean>(false);
  const [leagueId, setLeagueId] = useState<string | null>(null);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const disableMsg = 'Week 1 has not started yet. Normally Week 1 will begin the Monday following your League Draft. Once it has started, this link will become active.';

  const handleLeagueSetup = (leagueId: string, hasDraft: boolean, leagueData: Record<string, any>, matchupData: Record<string, any>, teamData: Record<string, any>) => {
    setLeagueId(leagueId);
    setIsDraftActive(hasDraft);
    setLeagueData({
      ...leagueData[0],
      ...matchupData[0],
      ...teamData[0]
    });
  };

  const handleLeagueData = async () => {
    const { league_id } = router.query;

    try {
      const { leagueData, matchupData, hasDraft, teamData } = await getLeague(
        league_id as string,
        currentUser?.token
      );

      handleLeagueSetup(league_id as string, hasDraft, leagueData, matchupData, teamData);
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
        <GlobalStyles.GlobalContainer className="bgImage leagueDetail">
          <GlobalStyles.GlobalTitle className="home">League Hub</GlobalStyles.GlobalTitle>
          <LeagueChamp classProp="champ" />
          {!leagueData && <Loader />}
          {leagueData && (
            <>
              <div className="buttonGrid">
                {account?.user_id === leagueData.creator_id && leagueData.active === 1 && (
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
                {!!leagueData.teamId && leagueData.active === 1 && (
                  <>
                    <SelectionCard
                      btnText="Team"
                      redirect={`/team?team_id=${leagueData.teamId}`}
                    />
                    <SelectionCard
                      btnText="Matchup"
                      redirect={`/matchup?matchup_id=${leagueData.matchupId}`}
                      isDisabled={!(leagueData.week > 0) || leagueData.team_b === 0}
                      disabledMsg={leagueData.team_b === 0 ? 'This is a Bye week. There are no matchups on a bye week.' : disableMsg}
                    />
                  </>
                )}
                <SelectionCard
                  btnText="Schedule"
                  redirect={`/schedule?league_id=${leagueId}`}
                  isDisabled={!(leagueData.week > 0)}
                  disabledMsg={disableMsg}
                />
                <SelectionCard
                  btnText="Scoreboard"
                  redirect={`/scoreboard?league_id=${leagueId}`}
                  isDisabled={!(leagueData.week > 0)}
                  disabledMsg={disableMsg}
                />
                <SelectionCard
                  btnText="Standings"
                  redirect={`/standings?league_id=${leagueId}`}
                  isDisabled={!(leagueData.week > 0)}
                  disabledMsg={disableMsg}
                />
                <SelectionCard
                  btnText="Playoffs"
                  redirect={`/playoffs?league_id=${leagueId}`}
                  isDisabled={!(leagueData.week > 0)}
                  disabledMsg={disableMsg}
                />
              </div>
            </>
          )}
        </GlobalStyles.GlobalContainer>
      )}
    </>
  );
};

export default League;
