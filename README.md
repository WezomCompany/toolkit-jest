# @wezom/toolkit-jest

![Test](https://github.com/WezomCompany/toolkit-jest/workflows/Test/badge.svg)
![Build](https://github.com/WezomCompany/toolkit-jest/workflows/Build/badge.svg)

> _Useful tools for working with Jest_

| Statements                                                                  | Branches                                                                  | Functions                                                                  | Lines                                                                  |
| --------------------------------------------------------------------------- | ------------------------------------------------------------------------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg) |

## Table of Content:

1. [Usage](#usage)
    - [Install npm package](#install-npm-package)
1. [Tools](#usage)
    1. [`jestFunctionSignatureTest()`](#jestfunctionsignaturetest)
1. [Contributing](#contributing)
1. [License](#licence)

---

## Usage

### Install npm package

```bash
npm i @wezom/toolkit-jest
```

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Tools

### jestFunctionSignatureTest()

[comment]: <> (AUTODOC-TOOL-START::function-signature-test#default)

Function signature test with set of custom cases

_Parameters:_

| Name   | Data type                                                                 | Argument | Default value | Description |
| ------ | ------------------------------------------------------------------------- | -------- | ------------- | ----------- |
| method | `T`                                                                       |          |               |
| cases  | `{ name?: string; parameters: Parameters<T>; expected: ReturnType<T> }[]` |          |               |

_Returns:_ `void`

_Examples:_

```ts
// some-function.ts
export const someFunction = (y: boolean, z: number, w: number): number | null =>
	y ? z + w : null;

// some-function.spec.ts
import someFunction from 'some-function.ts';
import { jestFunctionSignatureTest } from '@wezom/toolkit-jest';

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(someFunction, [
		{
			parameters: [true, 4, 5],
			expected: 9
		},
		{
			name: 'Custom test name',
			parameters: [false, 4, 5],
			expected: null
		}
	]);
});
```

[comment]: <> (AUTODOC-TOOL-END)

---

[▲ Go Top](#) | [▲ Table of Content](#table-of-content)

---

## Contributing

Please fill free to create [issues](https://github.com/WezomCompany/toolkit-jest/issues) or send [PR](https://github.com/WezomCompany/toolkit-jest/pulls)

## Licence

[BSD-3-Clause License](https://github.com/WezomCompany/toolkit-jest/blob/master/LICENSE)

---
