import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const createLeague = async (payload, token) => {
  const data = {
    url: `${api}/league/create`,
    method: 'post',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const joinLeague = async (leagueId, token) => {
  const data = {
    url: `${api}/league/join/${leagueId}`,
    method: 'put',
    token,
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

export const getScoreboard = async (leagueId, token) => {
  const data = {
    url: `${api}/league/scoreboard/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getStandings = async (leagueId, token) => {
  const data = {
    url: `${api}/league/standings/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};
