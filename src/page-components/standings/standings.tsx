import BackLink from 'Components/back-link/back-link';
import Metadata from 'Components/metadata/metadata';
import NotUser from 'Components/not-user/not-user';
import ReadMore from 'Components/read-more/read-more';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error/error';
import React, { useEffect, useState } from 'react';
import { useUserContext } from 'Hooks/user';
import { getStandings } from 'Requests/league';
import * as GlobalStyles from 'Styles/global.style';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import * as Styles from './standings.style';
import LeagueChamp from 'Components/league-champ/league-champ';

const Standings = () => {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const [games, setGames] = useState<Record<string, any> | null>(null);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const [account, setAccount] = useState<Record<string, any> | null>(null);

  const handleStandings = async () => {
    const { league_id } = router.query;

    try {
      const games = await getStandings(league_id as string, currentUser?.token);

      setGames(games);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get the standings'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!account) {
      handleStandings();
    }
  }, [router.query, account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="League Standings"
        description="View the league standings. See how all the teams are ranked amongst each other."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <BackLink />
          <LeagueChamp />
          <GlobalStyles.GlobalContainer className="grid schedule">
            {games?.map((game: Record<string, any>, index: number) => {
              const { team, win, loss } = game;

              return (
                <Styles.StandingsWrapper key={team}>
                  <div>{index + 1}.</div>
                  <Styles.StandingsTeamContainer>
                    <Styles.StandingsTeamSection>
                      <Styles.StandingsTeamName>
                        {team}
                      </Styles.StandingsTeamName>
                      <div>{`${win} - ${loss}`}</div>
                    </Styles.StandingsTeamSection>
                  </Styles.StandingsTeamContainer>
                </Styles.StandingsWrapper>
              );
            })}
          </GlobalStyles.GlobalContainer>
          <ReadMore />
        </>
      )}
    </>
  );
};

export default Standings;
