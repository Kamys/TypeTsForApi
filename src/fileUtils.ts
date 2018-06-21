import * as fs from "fs";

export function createFile(path: string, fileName: string, text: string) {
  let fullName = `${__dirname}/${path}/${fileName}.ts`;

  createFullPath(path);

  const stream = fs.createWriteStream(fullName);
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