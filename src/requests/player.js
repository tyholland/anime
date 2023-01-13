import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getPlayers = async () => {
  const data = {
    url: `${api}/player`,
    method: 'get',
    noCreds: true,
    body: null,
  };

  return await axiosClient(data);
};

export const getPlayer = async (playerId) => {
  const data = {
    url: `${api}/player/${playerId}`,
    method: 'get',
    noCreds: true,
    body: null,
  };

  return await axiosClient(data);
};
