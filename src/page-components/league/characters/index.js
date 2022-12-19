import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import LeagueCharacterMetadata from './leagueCharacterMetadata';
import 'react-data-grid/lib/styles.css';
import BackLink from 'Components/back-link';
import Players from 'Components/players';

const LeagueCharacters = ({ players }) => {
  return (
    <>
      <LeagueCharacterMetadata />
      <BackLink />
      <$GlobalContainer className="grid leagueCharacter">
        <$GlobalTitle>Add Character</$GlobalTitle>
        <div>Remaining Points: 9000</div>
        <Players data={players} />
      </$GlobalContainer>
    </>
  );
};

export default LeagueCharacters;
