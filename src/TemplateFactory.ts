import { json2ts } from 'json-ts';

import { JsonTsOptions } from 'json-ts/src/index';
import { createFile } from './utils/file';

export function generateInterface(name: string, josn: string): string {
  const option: JsonTsOptions = {
    prefix: 'I',
    rootName: name,
  };

  let textInterface: string = json2ts(josn, option);
  textInterface             = textInterface.replace(/interface/gi, 'export interface');

  return textInterface;
}