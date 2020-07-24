# babel-plugin-starts-with-ends-with

> Replaces `startsWith` and `endsWith` with es5 compatible code.

## Example

**In**

```javascript
'foobar'.startsWith('foo');
'foobar'.endsWith('bar');
```

**Out**

```javascript
'foobar'.indexOf('foo')===0;
'foobar'.slice(-'bar'.length)==='bar';
```

## Installation

Using npm:
```sh
npm install --save-dev babel-plugin-starts-with-ends-with
```

or using yarn:
```sh
yarn add babel-plugin-starts-with-ends-with --dev
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["starts-with-ends-with"]
}
```

### Via CLI

```sh
$ babel --plugins starts-with-ends-with script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["starts-with-ends-with"]
});
```
