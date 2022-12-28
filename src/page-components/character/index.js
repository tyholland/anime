import React from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import BackLink from 'Components/back-link';
import Players from 'Components/players';
import Metadata from 'Components/metadata';

const Character = ({ players }) => {
  return (
    <>
      <Metadata
        title="Characters"
        description="View all the characters available to play in the ABZ Fantasy League. Click on a character to view the profile"
      />
      <BackLink />
      <$GlobalContainer className="grid character">
        <$GlobalTitle>All Characters</$GlobalTitle>
        <Players data={players} />
      </$GlobalContainer>
    </>
  );
};

export default Character;
