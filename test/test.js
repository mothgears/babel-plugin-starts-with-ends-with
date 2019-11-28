const babel = require('@babel/core');
import {expect} from 'chai';
import plugin from '../src';

describe('babel-plugin-transform-array-includes', function() {
	it("'foobar'.startsWith('foo')", function() {
		expect(babel.transform("'foobar'.startsWith('foo');", {plugins: [plugin], compact: true}).code)
			.to.equal("'foobar'.indexOf('foo')===0;");
	});
	it("'foobar'.endsWith('bar')", function() {
		expect(babel.transform("'foobar'.endsWith('bar');", {plugins: [plugin], compact: true}).code)
			.to.equal("'foobar'.slice(-'bar'.length)==='bar';");
	});
});