import BackLink from 'Components/back-link';
import GameContainer from 'Components/game-container';
import Metadata from 'Components/metadata';
import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import { $GlobalContainer, $CollapsibleStyles } from 'Styles/global.style';
import { $PlayoffsWrapper } from './playoffs.style';
import { useRouter } from 'next/router';
import { getPlayoffs } from 'src/requests/league';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import Error from 'PageComponents/error';
import { useAppContext } from 'src/hooks/context';
import NotUser from 'Components/not-user';
import ReadMore from 'Components/read-more';
import LeagueChamp from 'Components/league-champ';

const Playoffs = () => {
  const defaultFirstRound = [
    {
      teamA: '#1 seed',
      teamB: 'Bye',
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: '#3 seed',
      teamB: '#6 seed',
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: '#4 seed',
      teamB: '#5 seed',
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: '#2 seed',
      teamB: 'Bye',
      scoreA: 0,
      scoreB: 0,
    },
  ];

  const defaultSemis = [
    {
      teamA: 'Winner of Game #1',
      teamB: 'Winner of Game #4',
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: 'Winner of Game #2',
      teamB: 'Winner of Game #3',
      scoreA: 0,
      scoreB: 0,
    },
  ];

  const defaultFinals = [
    {
      teamA: 'Winner of Game #5',
      teamB: 'Winner of Game #6',
      scoreA: 0,
      scoreB: 0,
    },
  ];

  const router = useRouter();
  const { currentUser } = useAppContext();
  const [round1, setRound1] = useState(defaultFirstRound);
  const [round2, setRound2] = useState(defaultSemis);
  const [round3, setRound3] = useState(defaultFinals);
  const [errorPage, setErrorPage] = useState(false);
  const [account, setAccount] = useState(null);

  const handlePlayoffSchedule = async () => {
    const { league_id } = router.query;

    try {
      const { firstRound, semis, finals } = await getPlayoffs(
        league_id,
        currentUser?.token
      );

      if (firstRound.length) setRound1(firstRound);
      if (semis.length) setRound2(semis);
      if (finals.length) setRound3(finals);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get playoffs schedule'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    setAccount(currentUser);
  }, [currentUser]);

  useEffect(() => {
    if (Object.keys(router.query).length > 0 && !!account) {
      handlePlayoffSchedule();
    }
  }, [router.query, account]);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <$CollapsibleStyles />
      <Metadata
        title="League Playoffs"
        description="View the league playoffs. Be one of the top 6 teams in the league and compete for the championship."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <BackLink />
          <LeagueChamp />
          <$GlobalContainer>
            <div>
              <Collapsible trigger="First Round" triggerTagName="div">
                <$PlayoffsWrapper>
                  {round1.map((game, index) => {
                    return (
                      <GameContainer
                        game={game}
                        gameNum={index + 1}
                        key={game.teamA}
                      />
                    );
                  })}
                </$PlayoffsWrapper>
              </Collapsible>
              <Collapsible trigger="Semi-Finals" triggerTagName="div">
                <$PlayoffsWrapper>
                  {round2.map((game, index) => {
                    return (
                      <GameContainer
                        game={game}
                        gameNum={index + 5}
                        key={game.teamA}
                      />
                    );
                  })}
                </$PlayoffsWrapper>
              </Collapsible>
              <Collapsible trigger="Finals" triggerTagName="div">
                <$PlayoffsWrapper>
                  {round3.map((game) => {
                    return <GameContainer game={game} key={game.teamA} />;
                  })}
                </$PlayoffsWrapper>
              </Collapsible>
            </div>
          </$GlobalContainer>
          <ReadMore />
        </>
      )}
    </>
  );
};

export default Playoffs;
