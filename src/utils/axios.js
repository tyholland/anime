import axios from 'axios';

export const axiosClient = async (data) => {
  const { body, method, auth, url } = data;

  const options = {
    method,
    url,
  };

  if (auth) {
    options.headers.Authorization = `Bearer ${auth}`;
  }

  if (body) {
    options.data = body;
  }

  const response = await axios(options);

  return response.data;
};
