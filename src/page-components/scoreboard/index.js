import BackLink from 'Components/back-link';
import GameContainer from 'Components/game-container';
import Metadata from 'Components/metadata';
import NotUser from 'Components/not-user';
import ReadMore from 'Components/read-more';
import { useRouter } from 'next/router';
import Error from 'PageComponents/error';
import React, { useEffect, useState } from 'react';
import { useAppContext } from 'src/hooks/context';
import { getScoreboard } from 'src/requests/league';
import { $GlobalContainer } from 'Styles/global.style';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';

const Scoreboard = () => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [games, setGames] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [account, setAccount] = useState(null);

  const handleScoreboard = async () => {
    const { league_id } = router.query;

    try {
      const games = await getScoreboard(league_id, currentUser?.token);

      setGames(games);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get the scoreboard'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!account) {
      handleScoreboard();
    }
  }, [router.query, account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="League Scoreboard"
        description="View the league scoreboard for the current week. See how all the other teams are doing for the week."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <BackLink />
          <$GlobalContainer className="grid schedule">
            {games?.map((game) => {
              return <GameContainer game={game} key={game.teamA} />;
            })}
          </$GlobalContainer>
          <ReadMore />
        </>
      )}
    </>
  );
};

export default Scoreboard;
