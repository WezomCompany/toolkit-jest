/**
 * Function signature test with set of custom cases
 * @example
 *  // x.ts
 *  export const x = (y: boolean, z: number, w: number):number|null => y ? z + w : null;
 *
 *  // x.spec.ts
 *  import x from 'x.ts'
 *  import { jestFunctionSignatureTest } from '@wezom/toolkit-jest'
 *
 *  describe('Function signature should match specification', () => {
 *      jestFunctionSignatureTest(x, [
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
	cases: {
		name?: string;
		parameters: Parameters<T>;
		expected: ReturnType<T>;
	}[]
): void {
	cases.forEach(({ name, parameters, expected }, i) => {
		test(name || `Test case #${i + 1}`, () => {
			const result = method(...parameters);
			expect(result).toStrictEqual(expected);
		});
	});
}
