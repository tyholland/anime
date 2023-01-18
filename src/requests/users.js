import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getAccountInfo = async (token) => {
  const data = {
    url: `${api}/users`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const addNewAccount = async (payload) => {
  const data = {
    url: `${api}/users/create`,
    method: 'post',
    body: payload,
  };

  return await axiosClient(data);
};

export const accountLogin = async (payload) => {
  const data = {
    url: `${api}/users/login`,
    method: 'post',
    body: payload,
  };

  return await axiosClient(data);
};
