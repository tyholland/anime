import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getTeam = async (teamId, token) => {
  const data = {
    url: `${api}/team/data/${teamId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getMatchupTeam = async (teamId, token) => {
  const data = {
    url: `${api}/team/matchup/${teamId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getTeamInfo = async (memberId, token) => {
  const data = {
    url: `${api}/team/info/${memberId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const updateTeam = async (teamId, payload, token) => {
  const data = {
    url: `${api}/team/${teamId}`,
    method: 'put',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const updateTeamName = async (memberId, payload, token) => {
  const data = {
    url: `${api}/team/name/${memberId}`,
    method: 'put',
    body: payload,
    token,
  };

  return await axiosClient(data);
};
