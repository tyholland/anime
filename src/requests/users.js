import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getAccountInfo = async (userId) => {
  const data = {
    url: `${api}/users/${userId}`,
    method: 'get',
    auth: null,
    body: null,
  };

  return await axiosClient(data);
};

export const addNewAccount = async (payload) => {
  const data = {
    url: `${api}/users/create`,
    method: 'post',
    auth: null,
    body: payload,
  };

  return await axiosClient(data);
};
