<h3 align=center>
    <p>Previous Index Of</p>
</h3>
<p align="center">
   <a href="https://travis-ci.org/Simonwep/previous-index-of"><img
     alt="Build Status"
     src="https://img.shields.io/travis/Simonwep/previous-index-of.svg?style=popout-square"></a>
  <a href="https://www.npmjs.com/package/@simonwep/previous-index-of"><img
     alt="Download count"
     src="https://img.shields.io/npm/dm/@simonwep/previous-index-of.svg?style=popout-square"></a>
  <img alt="No dependencies" src="https://img.shields.io/badge/dependencies-none-27ae60.svg?style=popout-square">
  <img alt="Current version"
       src="https://img.shields.io/github/tag/Simonwep/previous-index-of.svg?color=3498DB&label=version&style=flat-square">
  <a href="https://www.patreon.com/simonwep"><img
     alt="Support me"
     src="https://img.shields.io/badge/patreon-support-3498DB.svg?style=popout-square"></a>
</p>

Find the index of a specific char-sequence in a string at a given offset.

### Installation
##### NPM
```bash
$ npm i previous-index-of
```
##### Yarn
```bash
$ yarn add previous-index-of
```

### Usage
```js
const previousIndexOf = require('previous-index-of');

// previousIndexOf(sourceString: <string>, target: <string>, offset: <number|undefined>)
previousIndexOf('baz bam boo foo bam', 'bam', 12); // 4
previousIndexOf('baz bam boo foo bam', 'bam');     // 16
previousIndexOf('baz bam boo foo bam', 'da');      // -1
previousIndexOf('baz bam boo foo bam', 'bam', {}); // 16
previousIndexOf('baz bam boo foo bam', null);      // -1
previousIndexOf(null, 'abc');                      // -1
```

### Running tests
```
$ npm install -d && npm test
```
