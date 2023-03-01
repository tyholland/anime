import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const createBracket = async (payload, token) => {
  const data = {
    url: `${api}/bracket/create`,
    method: 'post',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const addVotes = async (payload, token) => {
  const data = {
    url: `${api}/bracket/add`,
    method: 'put',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const getBracket = async (bracketId) => {
  const data = {
    url: `${api}/bracket/${bracketId}`,
    method: 'get',
  };

  return await axiosClient(data);
};

export const getAllBrackets = async (token) => {
  const data = {
    url: `${api}/bracket/all/items`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};
