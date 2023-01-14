import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getMatchUp = async (matchupId) => {
  const data = {
    url: `${api}/matchup/${matchupId}`,
    method: 'get',
    body: null,
  };

  return await axiosClient(data);
};

export const getMatchUpFromTeamId = async (teamId) => {
  const data = {
    url: `${api}/matchup/team/${teamId}`,
    method: 'get',
    body: null,
  };

  return await axiosClient(data);
};
