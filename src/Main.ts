import axios, { AxiosResponse } from 'axios';

import { Hoplite } from './Hoplite';
import { AxiosWrapper } from './exampleOut/api/AxiosWrapper';
import { createFile } from './utils/file';

async function start() {
  const axiosInstance = axios.create({
    baseURL: 'https://dev.emailer-electron-laravel.cronix.life/api/v1',
    timeout: 3000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  axiosInstance.interceptors.response.use(Hoplite.responseHandler as any);

  let responseLogin: AxiosResponse<{ token: string }> = await axiosInstance.post('/login', {
    'email': 'freidy.hanae@0ld0x.com',
    'password': 'freidy.hanae@0ld0x.com'
  });

  axiosInstance.defaults.headers.common.authorization = `Bearer ${responseLogin.data.token}`;

  await axiosInstance.get('/emails');
}

start()
  .then(Hoplite.createApiInterface);
