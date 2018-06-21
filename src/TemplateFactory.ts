import { renderString, renderTemplateFile } from 'template-file';
import { json2ts } from 'json-ts';

import { JsonTsOptions } from 'json-ts/src/index';
import { createFile } from './fileUtils';

export function createInterface(name: string, josn: string) {
  const option: JsonTsOptions = {
    prefix: 'I',
    rootName: name,
  };

  let textInterface: string = json2ts(josn, option);
  textInterface             = textInterface.replace(/interface/gi, 'export interface');

  createFile('/out/interface', name, textInterface);
}