import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const createLeague = async (payload: Record<string, any>, token: string) => {
  const data = {
    url: `${api}/league/create`,
    method: 'post',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const joinLeague = async (payload: Record<string, any>, token: string) => {
  const data = {
    url: `${api}/league/join`,
    method: 'put',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const getLeague = async (leagueId: number, token: string) => {
  const data = {
    url: `${api}/league/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getAllLeagues = async (token: string) => {
  const data = {
    url: `${api}/league/view`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getScoreboard = async (leagueId: number, token: string) => {
  const data = {
    url: `${api}/league/scoreboard/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getStandings = async (leagueId: number, token: string) => {
  const data = {
    url: `${api}/league/standings/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const deleteLeague = async (leagueId: number, token: string) => {
  const data = {
    url: `${api}/league/${leagueId}`,
    method: 'delete',
    token,
  };

  return await axiosClient(data);
};

export const getLeagueAdminData = async (leagueId: number, token: string) => {
  const data = {
    url: `${api}/league/admin/settings/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const updateLeague = async (leagueId: number, payload: Record<string, any>, token: string) => {
  const data = {
    url: `${api}/league/${leagueId}`,
    method: 'put',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const removeTeamFromLeague = async (memberId: number, payload: Record<string, any>, token: string) => {
  const data = {
    url: `${api}/league/remove/${memberId}`,
    method: 'delete',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const getPlayoffs = async (leagueId: number, token: string) => {
  const data = {
    url: `${api}/league/playoffs/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const startLeague = async () => {
  const data = {
    url: `${api}/cron/schedule`,
    method: 'get',
  };

  return await axiosClient(data);
};

export const getLeagueChamp = async (leagueId: string | string[], token: string) => {
  const data = {
    url: `${api}/league/champion/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};
