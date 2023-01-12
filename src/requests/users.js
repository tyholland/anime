import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getAccountInfo = async (userId) => {
  const data = {
    url: `${api}/users/${userId}`,
    method: 'get',
    body: null,
  };

  return await axiosClient(data);
};

export const addNewAccount = async (payload) => {
  const data = {
    url: `${api}/users/create`,
    method: 'post',
    noCreds: true,
    body: payload,
  };

  return await axiosClient(data);
};

export const accountLogin = async (payload) => {
  const data = {
    url: `${api}/users/login`,
    method: 'post',
    noCreds: true,
    body: payload,
  };

  return await axiosClient(data);
};
