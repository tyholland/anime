import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import BackLink from 'Components/back-link';
import Players from 'Components/players';
import Metadata from 'Components/metadata';

const LeagueCharacters = ({ players }) => {
  return (
    <>
      <Metadata
        title="Choose Your Characters"
        description="Add characters to your team to build an unstoppable squad. Remember don't exceed your points limit."
      />
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
