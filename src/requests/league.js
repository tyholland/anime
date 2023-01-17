import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const createLeague = async (payload) => {
  const data = {
    url: `${api}/league/create`,
    method: 'post',
    body: payload,
  };

  return await axiosClient(data);
};

export const joinLeague = async (leagueId, payload) => {
  const data = {
    url: `${api}/league/join/${leagueId}`,
    method: 'post',
    body: payload,
  };

  return await axiosClient(data);
};

export const getLeague = async (leagueId, token) => {
  const data = {
    url: `${api}/league/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getAllLeagues = async (token) => {
  const data = {
    url: `${api}/league/view`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};
