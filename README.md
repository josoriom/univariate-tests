# univariate-tests

[![NPM version][npm-image]][npm-url]
[![build status][ci-image]][ci-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

Univariate tests to detect outlier.

**Tests available**

* `Grubbs`
* `Dixon`

## Installation

`$ npm i univariate-tests`

## Usage

### [Grubbs](./src/grubbs.ts)
```js
import { grubbs } from 'univariate-tests';
const testValues = [10.45, 10.26, 10.49, 10.36, 10.53, 10.77];
const { test, criticalValue } = grubbs(testValues);
console.log(criticalValue); // 1.82
console.log(test[0]); // { value: 10.45, score: 0.15378928962176208, pass: true }
```

### [Dixon](./src/dixon.ts)
```js
import { dixon } from 'univariate-tests';
const testValues = [10.45, 10.26, 10.49, 10.36, 10.53, 10.77];
const { test, criticalValue } = dixon(testValues);
console.log(criticalValue); // 0.625
console.log(test[0]); // { value: 10.26, score: 0.1960784313725484, pass: true }
```
## References
* Miller, J. N., & Miller, J. C. (2010). Statistics and Chemometrics for Analytical Chemistry.

## License

[MIT](./LICENSE)

[npm-image]: https://img.shields.io/npm/v/univariate-tests.svg
[npm-url]: https://www.npmjs.com/package/univariate-tests
[ci-image]: https://github.com/josoriom/univariate-tests/workflows/Node.js%20CI/badge.svg?branch=master
[ci-url]: https://github.com/josoriom/univariate-tests/actions?query=workflow%3A%22Node.js+CI%22
[codecov-image]: https://img.shields.io/codecov/c/github/josoriom/univariate-tests.svg
[codecov-url]: https://codecov.io/gh/josoriom/univariate-tests
[download-image]: https://img.shields.io/npm/dm/univariate-tests.svg
[download-url]: https://www.npmjs.com/package/univariate-tests
