import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getMatchUp = async (matchupId: number, token: string) => {
  const data = {
    url: `${api}/matchup/${matchupId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getMatchUpFromTeamId = async (teamId: number, token: string) => {
  const data = {
    url: `${api}/matchup/team/${teamId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const createMatchupVotes = async (matchupId: number, payload: Record<string, any>, token: string) => {
  const data = {
    url: `${api}/matchup/vote/${matchupId}`,
    method: 'post',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const getMatchupVotes = async (voteId: number) => {
  const data = {
    url: `${api}/matchup/votes/${voteId}`,
    method: 'get',
  };

  return await axiosClient(data);
};

export const getAllMatchupVotes = async (payload: Record<string, any>) => {
  const data = {
    url: `${api}/matchup/all/votes`,
    method: 'put',
    body: payload,
  };

  return await axiosClient(data);
};

export const addVotes = async (payload: Record<string, any>) => {
  const data = {
    url: `${api}/matchup/add`,
    method: 'put',
    body: payload,
  };

  return await axiosClient(data);
};
