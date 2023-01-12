import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getTeam = async (leagueId, teamId) => {
  const data = {
    url: `${api}/team/data/${leagueId}/${teamId}`,
    method: 'get',
    body: null,
  };

  return await axiosClient(data);
};

export const getTeamInfo = async (memberId) => {
  const data = {
    url: `${api}/team/info/${memberId}`,
    method: 'get',
    body: null,
  };

  return await axiosClient(data);
};

export const updateTeam = async (teamId, payload) => {
  const data = {
    url: `${api}/team/${teamId}`,
    method: 'put',
    body: payload,
  };

  return await axiosClient(data);
};

export const updateTeamName = async (memberId, payload) => {
  const data = {
    url: `${api}/team/name/${memberId}`,
    method: 'put',
    body: payload,
  };

  return await axiosClient(data);
};
