type MethodType = Extract<keyof typeof console, string>;

const tempConsole: Record<string, ((...args: any[]) => any) | undefined> = {};

/**
 * Mute default `console.log` logging
 * @see {jestLogUnmute}
 * @example
 *  // some-function.ts
 *  export const someFunction = (x: number, y: number):number => {
 *      console.log('SOME LOG MESSAGE');
 *      return x + y;
 *  };
 *
 *  // some-function.spec.ts
 *  import { someFunction } from 'some-function'
 *  import { jestLogMute, jestLogUnmute } from '@wezom/toolkit-jest'
 *
 *  describe('Should be silent test', () => {
 *      beforeAll(() => jestLogMute());
 *
 *      test('silent testing of the `someFunction`', () => {
 *          expect(someFunction(1, 2)).toBe(3);
 *      });
 *
 *      beforeAll(() => jestLogUnmute());
 *  });
 */
export function jestLogMute(method: MethodType = 'log'): void {
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
	tempConsole[method] = console[method];
	console[method] = (): void => undefined;
}

/** @see {jestLogMute} */
export function jestLogUnmute(method: MethodType = 'log'): void {
	if (tempConsole[method] !== undefined) {
		console[method] = tempConsole[method];
		tempConsole[method] = undefined;
	}
}
