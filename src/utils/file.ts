import * as fs from 'fs';
import * as path from 'path';

const appDir = path.dirname(require.main.filename);

export function createFile(path: string, fileName: string, text: string) {
  console.log('appDir = ', appDir);
  let fullPath = `${appDir}/${path}`;

  createFullPath(fullPath);

  console.log('create file = ', fileName);
  const stream = fs.createWriteStream(`${fullPath}/${fileName}`);
  stream.once('open', () => {
    stream.write(text);
    stream.end();
  });
}

function createFullPath(path: string) {
  path
    .split('/')
    .reduce((currentPath, folder) => {
      currentPath += folder + '/';
      if (!fs.existsSync(currentPath)) {
        fs.mkdirSync(currentPath);
      }
      return currentPath;
    }, '');
}