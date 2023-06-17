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

  if (JSON.parse(bytes.toString(CryptoJS.enc.Utf8))) {
    clearAllCache();
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
      return JSON.parse(cookieVal);
    }
  }

  return null;
};

export const setCachedData = (name: string, value: string | number) => {
  document.cookie = `${name} = ${encryptData(value)}; secure; max-age=${
    5 * 24 * 60 * 60
  }`;
};

export const deleteCachedData = (name: string) => {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
};

export const getStorageData = (name: string) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const stored = window.localStorage.getItem(name);

  if (stored) {
    const date = getDate();
    const decryptedVal = decryptData(stored);
    const expire = dayjs.tz(decryptedVal.expiry, 'America/New_York');

    if (expire.diff(date) < 0) {
      deleteStorageData(name);
      return null;
    }

    if (!decryptedVal.value) {
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
  window.localStorage.removeItem(name);
};

export const clearAllCache = () => {
  deleteStorageData('abz.friday');
  deleteStorageData('abz.sunday');
  deleteStorageData('abz.news');
};
