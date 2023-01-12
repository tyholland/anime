import axios from 'axios';

export const axiosClient = async (data) => {
  const { body, method, url, noCreds } = data;

  const options = {
    method,
    url,
  };

  if (!noCreds) {
    options.withCredentials = true;
  }

  if (body) {
    options.data = body;
  }

  const response = await axios(options);

  return response.data;
};
