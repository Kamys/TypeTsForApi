import axios, { AxiosPromise, AxiosResponse } from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';
axios.defaults.baseURL = API_URL;
axios.defaults.timeout = 5000;

export namespace AxiosWrapper {

  export function get(apiMethod: string, urlParams: { [key: string]: string | number } = {}): AxiosPromise<AxiosResponse<any>> {
    return axios.get(API_URL + apiMethod, {
      params: urlParams,
    });
  }

  export function post(apiMethod: string, body: any = {}): AxiosPromise<AxiosResponse<any>> {
    return axios.post(API_URL + apiMethod,
      body,
    );
  }

  export function put(apiMethod: string, body: any = {}): AxiosPromise<any> {
    return axios.put(API_URL + apiMethod,
      body,
    );
  }

  export function deleteRequest(apiMethod: string, body: any = {}): AxiosPromise<any> {
    return axios.post(API_URL + apiMethod,
      { ...body, _method: 'DELETE'},
    );
  }
}
