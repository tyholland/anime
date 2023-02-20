import BackLink from 'Components/back-link';
import Metadata from 'Components/metadata';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error';
import React, { useEffect, useState } from 'react';
import { useAppContext } from 'src/hooks/context';
import { getStandings } from 'src/requests/league';
import { $GlobalContainer } from 'Styles/global.style';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import {
  $StandingsTeamSection,
  $StandingsWrapper,
  $StandingsTeamContainer,
  $StandingsTeamName,
} from './standings.style';

const Standings = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [games, setGames] = useState(null);
  const [errorPage, setErrorPage] = useState(false);

  const handleStandings = async () => {
    const { league_id } = router.query;

    try {
      const games = await getStandings(league_id, currentUser?.token);

      setGames(games);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get the standings'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length) {
      handleStandings();
    }
  }, [router.query]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <BackLink />
      <Metadata
        title="League Standings"
        description="View the league standings. See how all the teams are ranked amongst each other."
      />
      <$GlobalContainer className="grid schedule">
        {games?.map((game, index) => {
          const { team, win, loss } = game;

          return (
            <$StandingsWrapper key={team}>
              <div>{index + 1}.</div>
              <$StandingsTeamContainer>
                <$StandingsTeamSection>
                  <$StandingsTeamName>{team}</$StandingsTeamName>
                  <div>{`${win} - ${loss}`}</div>
                </$StandingsTeamSection>
              </$StandingsTeamContainer>
            </$StandingsWrapper>
          );
        })}
      </$GlobalContainer>
    </>
  );
};

export default Standings;
