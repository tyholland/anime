import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getPlayers = async () => {
  const url = `${api}/character`;
  
  return await axiosClient(url);
};