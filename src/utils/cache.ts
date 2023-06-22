import { getDate } from '.';
import CryptoJS from 'crypto-js';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const secretPass = process.env.NEXT_PUBLIC_CRYPT_KEY;

const encryptData = (text: string | Record<string, any> | number) => {
  const data = CryptoJS.AES.encrypt(
    JSON.stringify(text),
    secretPass
  ).toString();

  return data;
};

const decryptData = (text: string) => {
  const bytes = CryptoJS.AES.decrypt(text, secretPass);

  if (bytes.toString(CryptoJS.enc.Utf8).length === 0) {
    clearAllCache();
    return;
  }

  const data = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

  return data;
};

export const getCachedData = (name: string) => {
  if (typeof document === 'undefined') {
    return null;
  }

  const cookieArr = document.cookie.split(';');

  for (let i = 0; i < cookieArr.length; i++) {
    const cookiePair = cookieArr[i].split('=');

    if (name == cookiePair[0].trim()) {
      const cookieVal = decryptData(cookiePair[1]);
      const date = getDate();

      if (!cookieVal || !cookieVal.value) {
        return null;
      }

      const expire = dayjs.tz(cookieVal.expiry, 'America/New_York');
  
      if (expire.diff(date) < 0) {
        deleteCachedData(name);
        return null;
      }
      
      return JSON.parse(cookieVal.value);
    }
  }

  return null;
};

export const setCachedData = (name: string, value: string | number) => {
  const date = getDate();
  const item = {
    value,
    expiry: date.add(5, 'day'),
  };

  document.cookie = `${name} = ${encryptData(item)}; secure; path=/`;
};

export const deleteCachedData = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/`;
};

export const getStorageData = (name: string) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem(name);

  if (stored) {
    const date = getDate();
    const decryptedVal = decryptData(stored);

    if (!decryptedVal || !decryptedVal.value) {
      return null;
    }

    const expire = dayjs.tz(decryptedVal.expiry, 'America/New_York');

    if (expire.diff(date) < 0) {
      deleteStorageData(name);
      return null;
    }

    return JSON.parse(decryptedVal.value);
  }

  return null;
};

export const setStorageData = (name: string, value: string) => {
  const date = getDate();
  const item = {
    value,
    expiry: date.add(5, 'day'),
  };

  window.localStorage.setItem(name, encryptData(item));
};

export const deleteStorageData = (name: string) => {
  console.log('expire:', name);
  window.localStorage.removeItem(name);
};

export const clearAllCache = () => {
  deleteStorageData('abz.friday');
  deleteStorageData('abz.news');
};
