import { AxiosResponse } from 'axios';

import { generateInterface } from './TemplateFactory';
import { extractInterfaceName } from './utils/text';
import { createFile } from './utils/file';


let allResponse = {};

function responseHandler(response: AxiosResponse<object>) {
	const interfaceName = extractInterfaceName(response.request.path);
	allResponse         = {
		...allResponse,
		[interfaceName]: response.data,
	}
	return response;
}

function convertResponseToJson() {
	return JSON.stringify(allResponse, null, 4);
}

function saveResponse() {
	createFile('../out', 'Response.json', convertResponseToJson());
}

function createApiInterface() {
	console.log('Create interface');
	let textInterface = generateInterface(JSON.stringify(allResponse));

	createFile('../out/interface', `${'Interface'}.ts`, textInterface);
	console.log(`--- ${'Interface'}`);
}

function createApiMethod() {
	console.log('Create interface');

}

export const Hoplite = {
	responseHandler,
	saveResponse,
	createApiInterface,
};
