import React, { useEffect, useState } from 'react';
import { $GlobalContainer, $GlobalTitle } from 'Styles/global.style';
import 'react-data-grid/lib/styles.css';
import BackLink from 'Components/back-link';
import Players from 'Components/players';
import Metadata from 'Components/metadata';
import Error from 'PageComponents/error';
import { getPlayers } from 'src/requests/player';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import Loader from 'Components/loader';
import ReadMore from 'Components/read-more';

const Character = () => {
  const [players, setPlayers] = useState(null);
  const [errorPage, setErrorPage] = useState(false);

  const handleAllPlayers = async () => {
    try {
      const allPlayers = await getPlayers();

      setPlayers(allPlayers);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get all players'));
      setErrorPage(true);
    }
  };

  useEffect(() => {
    handleAllPlayers();
  }, []);

  if (errorPage) {
    return <Error />;
  }

  return (
    <>
      <Metadata
        title="Characters"
        description="View all the characters available to play in the Anime Fantasy League. Click on a character to view the profile"
      />
      <BackLink />
      <$GlobalContainer className="grid bgImage character">
        <$GlobalTitle>All Characters</$GlobalTitle>
        {!players && <Loader />}
        {players && <Players data={players} />}
      </$GlobalContainer>
      <ReadMore />
    </>
  );
};

export default Character;
