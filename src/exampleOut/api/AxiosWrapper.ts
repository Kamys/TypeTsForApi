import axios, { AxiosPromise } from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://dev.emailer-electron-laravel.cronix.life/api/v1',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

function get(apiMethod: string, urlParams: { [key: string]: string | number } = {}): AxiosPromise<any> {
  return axiosInstance.get(apiMethod, {
    params: urlParams,
  });
}

function post(apiMethod: string, body: any = {}): AxiosPromise<any> {
  return axiosInstance.post(apiMethod,
    body,
  );
}

function put(apiMethod: string, body: any = {}): AxiosPromise<any> {
  return axiosInstance.put(apiMethod,
    body,
  );
}

function deleteRequest(apiMethod: string, body: any = {}): AxiosPromise<any> {
  return axiosInstance.post(apiMethod,
    { ...body, _method: 'DELETE' },
  );
}


export const AxiosWrapper = {
  get,
  post,
  put,
  deleteRequest,
};