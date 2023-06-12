import { joinLeague } from 'Requests/league';
import { addEvent } from './amplitude';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import { NextRouter } from 'next/router';
import { getCachedData, setCachedData } from './cache';

dayjs.extend(utc);
dayjs.extend(timezone);

export const redirectUrl = (url: string) => {
  window.location.href = url;
};

export const redirectToAccount = (currentUser: Record<string, any>) => {
  if (currentUser) {
    redirectUrl('/account');
  }
};

export const redirectToContinuePage = (router: NextRouter) => {
  const path = router.query;

  if (Object.keys(path).includes('continue')) {
    redirectUrl(`${path.continue}`);
  } else {
    redirectUrl('/account');
  }
};

export const responseError = (err: Record<string, any>, description: string) => {
  return {
    data: err?.response?.data || err?.message,
    status: err?.response?.status || err?.request?.status,
    description,
  };
};

export const randomInt = (size: number) => {
  return Math.floor(Math.random() * size);
};

export const getAffinitiesTypes = (character: Record<string, any>) => {
  if (!character) {
    return [];
  }

  const {
    fire,
    water,
    wind,
    earth,
    arcane,
    electric,
    celestial,
    darkness,
    ice,
    no_affinity,
  } = character;

  const affinities = [
    {
      type: 'fire',
      value: fire,
    },
    {
      type: 'water',
      value: water,
    },
    {
      type: 'wind',
      value: wind,
    },
    {
      type: 'earth',
      value: earth,
    },
    {
      type: 'arcane',
      value: arcane,
    },
    {
      type: 'electric',
      value: electric,
    },
    {
      type: 'celestial',
      value: celestial,
    },
    {
      type: 'darkness',
      value: darkness,
    },
    {
      type: 'ice',
      value: ice,
    },
    {
      type: 'no affinity',
      value: no_affinity,
    },
  ];

  const affinityList = [];

  affinities.forEach((item: Record<string, any>) => {
    if (!!item.value && item.value > 0) {
      affinityList.push(item.type);
    }
  });

  return affinityList;
};

export const joinLeagueSetup = async (leagueHash: string, currentUser: Record<string, any>, router: NextRouter) => {
  const payload = {
    hash: leagueHash,
  };

  try {
    const { leagueId } = await joinLeague(payload, currentUser?.token);

    addEvent('Join League', {
      league: leagueHash,
      userId: currentUser?.user_id,
    });

    router.push(`/league?league_id=${leagueId}`);
  } catch (err) {
    throw new Error(`${err} - Can not join league`);
  }
};

export const getNonLoggedInUser = () => {
  if (typeof window === 'undefined') {
    return;
  }

  const user = getCachedData('aflNonLogged');

  if (!user) {
    const randomNum = randomInt(100000000);
    setCachedData('aflNonLogged', randomNum);
    return randomNum;
  }

  return parseInt(user);
};

export const getDate = (defaultDate: string | null = null) => {
  let currentDate = new Date();

  if (defaultDate) {
    currentDate = new Date(defaultDate);
  }

  const date = dayjs.tz(currentDate, 'America/New_York');

  return date;
};
