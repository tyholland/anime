import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getPlayers = async () => {
  const url = `${api}/player`;
  
  return await axiosClient(url);
};

export const getPlayer = async (playerId) => {
  const url = `${api}/player/${playerId}`;
  
  return await axiosClient(url);
};
