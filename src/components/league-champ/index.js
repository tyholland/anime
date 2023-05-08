import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { getLeagueChamp } from 'src/requests/league';
import { useAppContext } from 'src/hooks/context';
import { $GlobalTitle } from 'Styles/global.style';

const LeagueChamp = ({classProp = null}) => {
  const router = useRouter();
  const { currentUser } = useAppContext();
  const [theChamp, setTheChamp] = useState(null);

  const handleLeagueChamp = async () => {
    const { league_id } = router.query;

    try {
      const { champ } = await getLeagueChamp(league_id, currentUser?.token);
      setTheChamp(champ);
    } catch (err) {
      addEvent('Error', responseError(err, 'Failed to get League Champ'));
    }
  };

  useEffect(() => {
    if (Object.keys(router.query).length > 0) {
      handleLeagueChamp();
    }
  }, [router.query]);

  return (
    <>
      {!!theChamp && (
        <$GlobalTitle className={classProp ? classProp : ''}>Champion: {theChamp}</$GlobalTitle>
      )}
    </>
  );
};

export default LeagueChamp;
