import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getDraft = async (leagueId, token) => {
  const data = {
    url: `${api}/draft/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const createDraft = async (leagueId, token) => {
  const data = {
    url: `${api}/draft/create/${leagueId}`,
    method: 'post',
    token,
  };

  return await axiosClient(data);
};

export const startDraft = async (leagueId, token) => {
  const data = {
    url: `${api}/draft/start/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const draftNextRound = async (leagueId, token) => {
  const data = {
    url: `${api}/draft/rounds/${leagueId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const draftPlayers = async (teamId, payload, token) => {
  const data = {
    url: `${api}/draft/players/${teamId}`,
    method: 'put',
    body: payload,
    token,
  };

  return await axiosClient(data);
};