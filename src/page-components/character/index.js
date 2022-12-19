import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import CharacterMetadata from './characterMetadata';
import 'react-data-grid/lib/styles.css';
import BackLink from 'Components/back-link';
import Players from 'Components/players';

const Character = ({ players }) => {
  return (
    <>
      <CharacterMetadata />
      <BackLink />
      <$GlobalContainer className="grid character">
        <$GlobalTitle>All Characters</$GlobalTitle>
        <Players data={players} />
      </$GlobalContainer>
    </>
  );
};

export default Character;
