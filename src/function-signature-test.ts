export interface FunctionSignatureTestCase<T extends (...args: any[]) => void> {
	name?: string;
	parameters: Parameters<T>;
	expected: ReturnType<T>;
}

/**
 * Function signature test with set of custom cases
 * @example
 *  // some-function.ts
 *  export const someFunction = (y: boolean, z: number, w: number):number|null => y ? z + w : null;
 *
 *  // some-function.spec.ts
 *  import { someFunction } from 'some-function'
 *  import { jestFunctionSignatureTest } from '@wezom/toolkit-jest'
 *
 *  describe('Function signature should match specification', () => {
 *      jestFunctionSignatureTest(someFunction, [
 *          {
 *              parameters: [true, 4, 5],
 *              expected: 9
 *          },
 *          {
 *              name: 'Custom test name',
 *              parameters: [false, 4, 5],
 *              expected: null
 *          }
 *      ]);
 *  });
 */
export default function <T extends (...args: any[]) => void>(
	method: T,
	cases: FunctionSignatureTestCase<T>[]
): void {
	cases.forEach(({ name, parameters, expected }, i) => {
		test(name || `Test case #${i + 1}`, () => {
			const result = method(...parameters);
			expect(result).toStrictEqual(expected);
		});
	});
}
