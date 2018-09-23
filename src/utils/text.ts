export function toCamelCase(str) {
	return str
		.replace(/(?:^\w|[A-Z]|\b\w)/g, letter => letter.toUpperCase())
		.replace(/\s+/g, '');
}

export function extractInterfaceName(path: string) {
	const regex       = /(\/[A-z]+)/g;
	let interfaceName = path
		.match(regex)
		.pop()
		.slice(1);
	return toCamelCase(interfaceName);
}