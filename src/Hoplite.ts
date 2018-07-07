import { AxiosResponse } from 'axios';

import { generateInterface } from './TemplateFactory';
import { extractInterfaceName } from './utils/text';
import { createFile } from './utils/file';


const responseList: AxiosResponse<any>[] = [];

function responseHandler(response: AxiosResponse<object>) {
  responseList.push(response);
  return response;
}

function convertResponseToJson() {
  return JSON.stringify(responseList.map(response => ({
    data: response.data,
    config: response.config
  })), null, 4);
}

function saveResponse() {
  createFile('../out', 'Response.json', convertResponseToJson());
}

function createApiInterface() {
  console.log('Create interface');
  responseList.map(response => {
    const interfaceName = extractInterfaceName(response.request.path.replace('/api/v1', ''));

    let textInterface = generateInterface(interfaceName, JSON.stringify(response.data));

    createFile('../out/interface', `${interfaceName}.ts`, textInterface);
    console.log(`--- ${interfaceName}`);
  })
}

function createApiMethod() {
  console.log('Create interface');

}

export const Hoplite = {
  responseHandler,
  saveResponse,
  createApiInterface,
};
