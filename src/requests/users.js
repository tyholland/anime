import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getAccountInfo = async (firebaseUID) => {
  const url = `${api}/users/account`;
  const body = {
    firebaseUID
  };
  
  return await axiosClient(url, body);
};

export const addNewAccount = async (options) => {
  const url = `${api}/users/account`;
  
  return await axiosClient(url, options);
};
