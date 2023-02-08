import BackLink from 'Components/back-link';
import GameContainer from 'Components/game-container';
import Metadata from 'Components/metadata';
import React from 'react';
import Collapsible from 'react-collapsible';
import { $GlobalContainer } from 'Styles/global.style';
import { $GameplayStyles } from 'PageComponents/gameplay/gameplay.style';
import { $PlayoffsWrapper } from './playoffs.style';

const Playoffs = ({ schedule }) => {
  const { firstRound, semis, finals } = schedule;

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
      teamB: 'Winner of Game #2',
      scoreA: 0,
      scoreB: 0,
    },
    {
      teamA: 'Winner of Game #3',
      teamB: 'Winner of Game #4',
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

  const round1 = firstRound.length ? firstRound : defaultFirstRound;
  const round2 = semis.length ? semis : defaultSemis;
  const round3 = finals.length ? finals : defaultFinals;

  return (
    <>
      <BackLink />
      <$GameplayStyles />
      <Metadata
        title="League Playoffs"
        description="View the league playoffs. Be one of the top 6 teams in the league and compete for the championship."
      />
      <$GlobalContainer>
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
      </$GlobalContainer>
    </>
  );
};

export default Playoffs;
