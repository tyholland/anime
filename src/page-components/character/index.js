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
import { useRouter } from 'next/router';

const Character = () => {
  const router = useRouter();
  const [players, setPlayers] = useState(null);
  const [errorPage, setErrorPage] = useState(false);
  const [seriesName, setSeriesName] = useState(null);
  const { series } = router.query;

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

  useEffect(() => {
    setSeriesName(series);
  }, [series]);

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
        {players && <Players data={players} series={seriesName} />}
      </$GlobalContainer>
      <ReadMore />
    </>
  );
};

export default Character;
