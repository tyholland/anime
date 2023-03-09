import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getPlayers = async () => {
  const data = {
    url: `${api}/player`,
    method: 'get',
  };

  return await axiosClient(data);
};

export const getPlayer = async (playerId) => {
  const data = {
    url: `${api}/player/${playerId}`,
    method: 'get',
  };

  return await axiosClient(data);
};

export const getUseablePlayers = async (teamId, token) => {
  const data = {
    url: `${api}/player/select/${teamId}`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getAnimeNews = async () => {
  const data = {
    url: `${api}/player/anime/news`,
    method: 'get',
  };

  return await axiosClient(data);
};

export const updatePlayerData = async (payload, token) => {
  const data = {
    url: `${api}/player/update`,
    method: 'post',
    body: payload,
    token,
  };

  return await axiosClient(data);
};
