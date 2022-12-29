import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const createLeague = async (payload) => {
  const data = {
    url: `${api}/league/create`,
    method: 'post',
    auth: null,
    body: payload,
  };

  return await axiosClient(data);
};

export const getLeague = async (leagueId) => {
  const data = {
    url: `${api}/league/${leagueId}`,
    method: 'get',
    auth: null,
    body: null,
  };

  return await axiosClient(data);
};

export const getAllLeagues = async (userId) => {
  const data = {
    url: `${api}/league/view/${userId}`,
    method: 'get',
    auth: null,
    body: null,
  };

  return await axiosClient(data);
};
