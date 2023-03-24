import { joinLeague } from 'src/requests/league';
import { addEvent } from './amplitude';

export const redirectUrl = (url) => {
  window.location.href = url;
};

export const redirectToAccount = (currentUser) => {
  if (currentUser) {
    redirectUrl('/account');
  }
};

export const redirectToContinuePage = (router) => {
  const path = router.query;

  if (Object.keys(path).includes('continue')) {
    redirectUrl(`${path.continue}`);
  } else {
    redirectUrl('/account');
  }
};

export const responseError = (err, description) => {
  return {
    data: err?.response?.data || err?.message,
    status: err?.response?.status || err?.request?.status,
    description,
  };
};

export const randomInt = () => {
  return Math.floor(Math.random() * 50);
};

export const getAffinitiesTypes = (character) => {
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
    celestrial,
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
      type: 'celestrial',
      value: celestrial,
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

  affinities.forEach((item) => {
    if (!!item.value && item.value > 0) {
      affinityList.push(item.type);
    }
  });

  return affinityList;
};

export const joinLeagueSetup = async (leagueHash, currentUser, router) => {
  const payload = {
    hash: leagueHash,
  };

  try {
    const { leagueId } = await joinLeague(payload, currentUser?.token);

    addEvent('Join League', {
      league: leagueHash,
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

  const user = window.localStorage.getItem('abz.nonLogged');

  if (!user) {
    const randomNum = Math.floor(Math.random() * 100000000);
    window.localStorage.setItem('abz.nonLogged', randomNum);
    return randomNum;
  }

  return parseInt(user);
};
