import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getTeam = async (teamId: number, token: string) => {
  const data = {
    url: `${api}/team/data/${teamId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getMatchupTeam = async (teamId: number, token: string) => {
  const data = {
    url: `${api}/team/matchup/${teamId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getTeamInfo = async (memberId: number, token: string) => {
  const data = {
    url: `${api}/team/info/${memberId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const updateTeam = async (teamId: number, payload: Record<string, any>, token: string) => {
  const data = {
    url: `${api}/team/${teamId}`,
    method: 'put',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const updateTeamName = async (memberId: number, payload: Record<string, any>, token: string) => {
  const data = {
    url: `${api}/team/name/${memberId}`,
    method: 'put',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const getSchedule = async (leagueId: number, token: string) => {
  const data = {
    url: `${api}/team/schedule/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const removeTeam = async (leagueId: number, token: string) => {
  const data = {
    url: `${api}/team/${leagueId}`,
    method: 'delete',
    token,
  };

  return await axiosClient(data);
};

export const hideRecap = async (leagueId: number, token: string) => {
  const data = {
    url: `${api}/team/recap/${leagueId}`,
    method: 'put',
    token,
  };

  return await axiosClient(data);
};
