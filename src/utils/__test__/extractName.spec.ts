import { expect } from 'chai';
import 'mocha';
import { extractInterfaceName } from '../text'

describe('Extract interface name', () => {

	it('Extract main entity', () => {
		const path = '/user/1/post';
		const result = extractInterfaceName(path);
		expect(result).to.equals('Post');
	});

	it('Replace ? with By', () => {
		const path = '/comments?postId=1&isActive=1';
		const result = extractInterfaceName(path);
		expect(result).to.equals('Comments');
	});
});