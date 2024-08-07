import React, { useEffect, useState } from 'react';
import * as GlobalStyles from 'Styles/global.style';
import BackLink from 'Components/back-link/back-link';
import Players from 'Components/players/players';
import Metadata from 'Components/metadata/metadata';
import Error from 'PageComponents/error/error';
import { getPlayers } from 'Requests/player';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import Loader from 'Components/loader/loader';
import ReadMore from 'Components/read-more/read-more';
import { useRouter } from 'next/router';

const Character = () => {
  const router = useRouter();
  const [players, setPlayers] = useState<Record<string, any> | null>(null);
  const [errorPage, setErrorPage] = useState<boolean>(false);
  const [seriesName, setSeriesName] = useState<string | null>(null);
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
    setSeriesName(series as string);
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
      <GlobalStyles.GlobalContainer className={`grid ${!players ? '' : 'bgImage character'}`}>
        <GlobalStyles.GlobalTitle>All Characters</GlobalStyles.GlobalTitle>
        {!players && <Loader />}
        {players && <Players data={players} series={seriesName as string} page="character" />}
      </GlobalStyles.GlobalContainer>
      <ReadMore />
    </>
  );
};

export default Character;
