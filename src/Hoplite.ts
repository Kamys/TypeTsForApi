import { AxiosResponse } from 'axios';

import { createInterface } from './TemplateFactory';
import { toCamelCase } from './utils/utils';

function extractInterfaceName(path: string) {
  let interfaceName = path
    .match('\\/[a-z]+')
    .map(str => str.slice(1))
    .join(' ');
  return toCamelCase(interfaceName);
}

const responseList: AxiosResponse<any>[] = [];

function addType(response: AxiosResponse<any>) {
  responseList.push(response);
}

function createApi() {
  responseList.map(response => {
    const interfaceName = extractInterfaceName(response.request.path);
    createInterface(interfaceName, JSON.stringify(response.data));
  })
}

export const Hoplite = {
  addType,
  createApi,
};
