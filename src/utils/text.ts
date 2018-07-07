export function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, letter => letter.toUpperCase())
    .replace(/\s+/g, '');
}

export function extractInterfaceName(path: string) {
  const regex       = RegExp('[A-z]');
  let interfaceName = path
    .split('/')
    .filter(s => regex.test(s))
    .join(' ');
  return toCamelCase(interfaceName);
}