import { jestFunctionSignatureTest } from '../index';

const x = (y: boolean, z: number, w: number): number | null => (y ? z + w : null);

describe('Function signature should match specification', () => {
	jestFunctionSignatureTest(x, [
		{
			parameters: [true, 4, 5],
			expected: 9
		},
		{
			parameters: [false, 4, 5],
			expected: null
		}
	]);
});
