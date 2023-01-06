import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getMatchUp = async (matchupId) => {
  const data = {
    url: `${api}/matchup/${matchupId}`,
    method: 'get',
    auth: null,
    body: null,
  };

  return await axiosClient(data);
};
