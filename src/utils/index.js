import { joinLeague } from 'src/requests/league';
import { addEvent } from './amplitude';
import CryptoJS from 'crypto-js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);
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
  document.cookie = `${name} = ${encryptData(value)}; secure; max-age=${
    5 * 24 * 60 * 60
  }`;
};

export const deleteCachedData = (name) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};

export const getStorageData = (name) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem(name);

  if (stored) {
    const currentDate = new Date();
    const date = dayjs.tz(currentDate, 'America/New_York');
    const decryptedVal = decryptData(stored);
    const expire = dayjs.tz(decryptedVal.expiry, 'America/New_York');

    if (expire.diff(date) < 0) {
      deleteStorageData(name);
      return null;
    }

    return JSON.parse(decryptedVal.value);
  }

  return null;
};

export const setStorageData = (name, value) => {
  const currentDate = new Date();
  const date = dayjs.tz(currentDate, 'America/New_York');
  const item = {
    value,
    expiry: date.add(5, 'day'),
  };

  window.localStorage.setItem(name, encryptData(item));
};

export const deleteStorageData = (name) => {
  window.localStorage.removeItem(name);
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
