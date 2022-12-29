import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getTeam = async (leagueId, teamId) => {
  const data = {
    url: `${api}/team/${leagueId}/${teamId}`,
    method: 'get',
    auth: null,
    body: null,
  };

  return await axiosClient(data);
};
