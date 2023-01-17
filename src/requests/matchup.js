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
