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

export const addBracketVotes = async (payload) => {
  const data = {
    url: `${api}/bracket/add`,
    method: 'put',
    body: payload,
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

export const getAllBrackets = async (userId) => {
  const data = {
    url: `${api}/bracket/all/items/${userId}`,
    method: 'get',
  };

  return await axiosClient(data);
};

export const startRound1 = async (bracketId, token) => {
  const data = {
    url: `${api}/bracket/round1/${bracketId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const startRound2 = async (bracketId, token) => {
  const data = {
    url: `${api}/bracket/round2/${bracketId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const startRound3 = async (bracketId, token) => {
  const data = {
    url: `${api}/bracket/round3/${bracketId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const startRound4 = async (bracketId, token) => {
  const data = {
    url: `${api}/bracket/round4/${bracketId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const startChampRound = async (bracketId, token) => {
  const data = {
    url: `${api}/bracket/round5/${bracketId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getTheChamp = async (bracketId, token) => {
  const data = {
    url: `${api}/bracket/champ/${bracketId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};
