import BackLink from 'Components/back-link/back-link';
import GameContainer from 'Components/game-container/game-container';
import Metadata from 'Components/metadata/metadata';
import React, { useEffect, useState } from 'react';
import Collapsible from 'react-collapsible';
import * as GlobalStyles from 'Styles/global.style';
import * as Styles from './playoffs.style';
import { useRouter } from 'next/router';
import { getPlayoffs } from 'Requests/league';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import Error from 'PageComponents/error/error';
import { useUserContext } from 'Hooks/user';
import NotUser from 'Components/not-user/not-user';
import ReadMore from 'Components/read-more/read-more';
import LeagueChamp from 'Components/league-champ/league-champ';

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
  const { currentUser } = useUserContext();
  const [round1, setRound1] = useState<Record<string, any>>(defaultFirstRound);
  const [round2, setRound2] = useState<Record<string, any>>(defaultSemis);
  const [round3, setRound3] = useState<Record<string, any>>(defaultFinals);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const [account, setAccount] = useState<Record<string, any> | null>(null);

  const handlePlayoffSchedule = async () => {
    const { league_id } = router.query;

    try {
      const { firstRound, semis, finals } = await getPlayoffs(
        league_id as string,
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

  const firstUp = (
    <div className="collapseContainer">
      <div>First Round</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const firstDown = (
    <div className="collapseContainer">
      <div>First Round</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const semisUp = (
    <div className="collapseContainer">
      <div>Semi-Finals</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const semisDown = (
    <div className="collapseContainer">
      <div>Semi-Finals</div>
      <div className="down">&#10132;</div>
    </div>
  );

  const finalUp = (
    <div className="collapseContainer">
      <div>Finals</div>
      <div className="up">&#10132;</div>
    </div>
  );

  const finalDown = (
    <div className="collapseContainer">
      <div>Finals</div>
      <div className="down">&#10132;</div>
    </div>
  );

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
      <GlobalStyles.CollapsibleStyles />
      <Metadata
        title="League Playoffs"
        description="View the league playoffs. Be one of the top 6 teams in the league and compete for the championship."
      />
      {!account && <NotUser />}
      {account && (
        <>
          <BackLink />
          <LeagueChamp />
          <GlobalStyles.GlobalContainer>
            <Styles.PlayoffsAccordian>
              <Collapsible
                trigger={firstDown}
                triggerWhenOpen={firstUp}
                triggerTagName="div"
                triggerElementProps={{ id: 'first', 'aria-controls': 'first' }}
                contentElementId="first"
              >
                <Styles.PlayoffsWrapper>
                  {round1.map((game: Record<string, any>, index: number) => {
                    return (
                      <GameContainer
                        game={game}
                        gameNum={index + 1}
                        key={game.teamA}
                      />
                    );
                  })}
                </Styles.PlayoffsWrapper>
              </Collapsible>
              <Collapsible
                trigger={semisDown}
                triggerWhenOpen={semisUp}
                triggerTagName="div"
                triggerElementProps={{ id: 'semis', 'aria-controls': 'semis' }}
                contentElementId="semis"
              >
                <Styles.PlayoffsWrapper>
                  {round2.map((game: Record<string, any>, index: number) => {
                    return (
                      <GameContainer
                        game={game}
                        gameNum={index + 5}
                        key={game.teamA}
                      />
                    );
                  })}
                </Styles.PlayoffsWrapper>
              </Collapsible>
              <Collapsible
                trigger={finalDown}
                triggerWhenOpen={finalUp}
                triggerTagName="div"
                triggerElementProps={{
                  id: 'finals',
                  'aria-controls': 'finals',
                }}
                contentElementId="finals"
              >
                <Styles.PlayoffsWrapper>
                  {round3.map((game: Record<string, any>) => {
                    return <GameContainer game={game} key={game.teamA} />;
                  })}
                </Styles.PlayoffsWrapper>
              </Collapsible>
            </Styles.PlayoffsAccordian>
          </GlobalStyles.GlobalContainer>
          <ReadMore />
        </>
      )}
    </>
  );
};

export default Playoffs;
