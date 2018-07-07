import axios from 'axios';

import { Hoplite } from './Hoplite';
import { AxiosWrapper } from './exampleOut/api/AxiosWrapper';

async function start() {
  try {
    const responseLogin = await AxiosWrapper.post('/login', {
      email: 'airelle.leesa@0celot.com',
      password: 'airelle.leesa@0celot.com'
    });
    axios.defaults.headers.common['authorization'] = `Bearer ${responseLogin.data.token}`;
    responseLogin.data.token;
    Hoplite.addType(responseLogin);

    const responseProjects = await AxiosWrapper.get('/projects');
    Hoplite.addType(responseProjects);

    Hoplite.createApi();
  } catch (e) {
    debugger
  }
}

start();

