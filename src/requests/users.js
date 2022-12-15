import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getAccountInfo = async () => {
  const url = `${api}/users/${userId}`;
  
  return await axiosClient(url);
};

export const addNewAccount = async (options) => {
  const url = `${api}/users/create`;
  
  return await axiosClient(url, options);
};
