import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getAccountInfo = async () => {
  const url = `${api}/users/account`;
  const userInfo = await axiosClient(url, {firebaseUID: '123'});

  return userInfo;
};