import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getPlayers = async () => {
  const data = {
    url: `${api}/player`,
    method: 'get',
    body: null,
  };

  return await axiosClient(data);
};

export const getPlayer = async (playerId) => {
  const data = {
    url: `${api}/player/${playerId}`,
    method: 'get',
    body: null,
  };

  return await axiosClient(data);
};
