import { axiosClient } from 'Utils/axios';
const api = process.env.NEXT_PUBLIC_API;

export const addNewAccount = async (payload: Record<string, any>) => {
  const data = {
    url: `${api}/users/create`,
    method: 'post',
    body: payload,
  };

  return await axiosClient(data);
};

export const accountLogin = async (payload: Record<string, any>) => {
  const data = {
    url: `${api}/users/login`,
    method: 'post',
    body: payload,
  };

  return await axiosClient(data);
};

export const accountExists = async (payload: Record<string, any>) => {
  const data = {
    url: `${api}/users/exists`,
    method: 'put',
    body: payload,
  };

  return await axiosClient(data);
};

export const accountLogout = async () => {
  const data = {
    url: `${api}/users/logout`,
    method: 'post',
  };

  return await axiosClient(data);
};

export const deleteAccount = async (token: string) => {
  const data = {
    url: `${api}/users`,
    method: 'delete',
    token,
  };

  return await axiosClient(data);
};

export const getAdminAccess = async (token: string) => {
  const data = {
    url: `${api}/admin/dashboard`,
    method: 'get',
    token,
  };

  return await axiosClient(data);
};
