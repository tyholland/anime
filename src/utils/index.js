import { joinLeague } from 'src/requests/league';
import { addEvent } from './amplitude';
import CryptoJS from 'crypto-js';
// import Cryptr from 'cryptr';
// const cryptr = new Cryptr(process.env.NEXT_PUBLIC_CRYPT_KEY);

const secretPass = process.env.NEXT_PUBLIC_CRYPT_KEY;

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

export const randomInt = (size) => {
  return Math.floor(Math.random() * size);
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
      userId: currentUser?.user_id,
    });

    router.push(`/league?league_id=${leagueId}`);
  } catch (err) {
    throw new Error(`${err} - Can not join league`);
  }
};

const encryptData = (text) => {
  const data = CryptoJS.AES.encrypt(
    JSON.stringify(text),
    secretPass
  ).toString();

  return data;
};

const decryptData = (text) => {
  const bytes = CryptoJS.AES.decrypt(text, secretPass);
  const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return data;
};

export const getCachedData = (name) => {
  if (typeof document === 'undefined') {
    return null;
  }

  const cookieArr = document.cookie.split(';');

  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');

    if (name == cookiePair[0].trim()) {
      const cookieVal = decryptData(cookiePair[1]);
      return JSON.parse(cookieVal);
    }
  }

  return null;
};

export const setCachedData = (name, value) => {
  document.cookie = `${name} = ${encryptData(value)}; secure; SameSite=Strict`;
};

export const deleteCachedData = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
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
