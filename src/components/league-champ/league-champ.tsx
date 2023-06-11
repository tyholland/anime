import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { addEvent } from 'Utils/amplitude';
import { responseError } from 'Utils/index';
import { getLeagueChamp } from 'Requests/league';
import { useUserContext } from 'Hooks/user';
import * as GlobalStyles from 'Styles/global.style';
import { LeagueChampProps } from 'Utils/types';

const LeagueChamp = ({classProp = null}: LeagueChampProps) => {
  const router = useRouter();
  const { currentUser } = useUserContext();
  const [theChamp, setTheChamp] = useState<string | null>(null);

  const handleLeagueChamp = async () => {
    const { league_id } = router.query;

    try {
      const { champ } = await getLeagueChamp(league_id as string, currentUser?.token);
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
        <GlobalStyles.GlobalTitle className={classProp ? classProp : ''}>Champion: {theChamp}</GlobalStyles.GlobalTitle>
      )}
    </>
  );
};

export default LeagueChamp;
