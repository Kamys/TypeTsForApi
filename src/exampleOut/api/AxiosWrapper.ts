import axios, { AxiosPromise } from 'axios';

const API_URL          = 'https://dev.emailer-electron-laravel.cronix.life/api/v1';
axios.defaults.baseURL = API_URL;
axios.defaults.timeout = 5000;

function get(apiMethod: string, urlParams: { [key: string]: string | number } = {}): AxiosPromise<any> {
  return axios.get(API_URL + apiMethod, {
    params: urlParams,
  });
}

function post(apiMethod: string, body: any = {}): AxiosPromise<any> {
  return axios.post(API_URL + apiMethod,
    body,
  );
}

function put(apiMethod: string, body: any = {}): AxiosPromise<any> {
  return axios.put(API_URL + apiMethod,
    body,
  );
}

function deleteRequest(apiMethod: string, body: any = {}): AxiosPromise<any> {
  return axios.post(API_URL + apiMethod,
    { ...body, _method: 'DELETE' },
  );
}


export const AxiosWrapper = {
  get,
  post,
  put,
  deleteRequest,
};