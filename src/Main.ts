import { AxiosResponse } from 'axios';

import { AxiosWrapper } from './AxiosWrapper';
import { createInterface } from './TemplateFactory';
import { toCamelCase } from './utils';

(async function  () {
  handlerResponse( await get('/posts/1'));
})();

async function get(method: string): Promise<AxiosResponse<any>> {
  try {
    return await AxiosWrapper.get(method);
  } catch (e) {
    console.log(e);
  }
}

function handlerResponse(response: AxiosResponse<any>){
  let match        = response.request.path.match('\\/[a-z]+');
  let message      = match.map(str => str.slice(1)).join(' ');
  let interfaceName = toCamelCase(message);

  createInterface(interfaceName, JSON.stringify(response.data));
}



