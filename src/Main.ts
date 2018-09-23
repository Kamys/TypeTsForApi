import axios, { AxiosResponse } from 'axios';

import { Hoplite } from './Hoplite';

async function start() {
  const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  axiosInstance.interceptors.response.use(Hoplite.responseHandler as any);

  /*let responseLogin: AxiosResponse<{ token: string }> = await axiosInstance.post('/login', {
    'email': 'freidy.hanae@0ld0x.com',
    'password': 'freidy.hanae@0ld0x.com'
  });

  axiosInstance.defaults.headers.common.authorization = `Bearer ${responseLogin.data.token}`;*/

  await axiosInstance.get('/todos/1');

  await axiosInstance.get('/todos');

  await axiosInstance.get('/posts');

  await axiosInstance.get('/comments');

  await axiosInstance.get('/photos');

  await axiosInstance.get('/users');

  await axiosInstance.get('/comments?postId=1');
}

start()
  .then(Hoplite.createApiInterface);
