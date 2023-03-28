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
