import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getMatchUp = async (matchupId, token) => {
  const data = {
    url: `${api}/matchup/${matchupId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getMatchUpFromTeamId = async (teamId, token) => {
  const data = {
    url: `${api}/matchup/team/${teamId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const createMatchupVotes = async (matchupId, payload, token) => {
  const data = {
    url: `${api}/matchup/vote/${matchupId}`,
    method: 'post',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const getMatchupVotes = async (voteId) => {
  const data = {
    url: `${api}/matchup/votes/${voteId}`,
    method: 'get',
  };

  return await axiosClient(data);
};

export const getAllMatchupVotes = async (payload) => {
  const data = {
    url: `${api}/matchup/all/votes`,
    method: 'put',
    body: payload,
  };

  return await axiosClient(data);
};

export const addVotes = async (payload) => {
  const data = {
    url: `${api}/matchup/add`,
    method: 'put',
    body: payload,
  };

  return await axiosClient(data);
};
