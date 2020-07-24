const babel = require('@babel/core');
const plugin = process.env.NODE_ENV === 'development' ? require('../src/index.mjs').default : require('../lib/index.js');

describe('babel-plugin-transform-array-includes', ()=>{
	it("'foobar'.startsWith('foo')", ()=>{
		expect(
			babel.transform("'foobar'.startsWith('foo');", {plugins: [plugin], compact: true}).code
		).toEqual("'foobar'.indexOf('foo')===0;");
	});
	it("'foobar'.endsWith('bar')", ()=>{
		expect(
			babel.transform("'foobar'.endsWith('bar');", {plugins: [plugin], compact: true}).code
		).toEqual("'foobar'.slice(-'bar'.length)==='bar';");
	});
});