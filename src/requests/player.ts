import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const getPlayers = async () => {
  const data = {
    url: `${api}/player`,
    method: 'get',
  };

  return await axiosClient(data);
};

export const getAdminPlayers = async (token: string) => {
  const data = {
    url: `${api}/admin/player`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};

export const getPlayer = async (playerId: number | string) => {
  const data = {
    url: `${api}/player/${playerId}`,
    method: 'get',
  };

  return await axiosClient(data);
};

export const getUseablePlayers = async (teamId: string, token: string) => {
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

export const updatePlayerData = async (payload: Record<string, any>, token: string) => {
  const data = {
    url: `${api}/player/update`,
    method: 'put',
    body: payload,
    token,
  };

  return await axiosClient(data);
};

export const addPlayerData = async (payload: Record<string, any>, token: string) => {
  const data = {
    url: `${api}/player/add`,
    method: 'post',
    body: payload,
    token,
  };

  return await axiosClient(data);
};
