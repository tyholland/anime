import axios from 'axios';

export const axiosClient = async (data: Record<string, any>) => {
  const { body, method, url, token } = data;

  const options: Record<string, any> = {
    method,
    url,
  };

  if (token) {
    options.headers = {
      Authorization: `Basic ${token}`,
    };
  }

  if (body) {
    options.data = body;
  }

  const response = await axios(options);

  return response.data;
};
