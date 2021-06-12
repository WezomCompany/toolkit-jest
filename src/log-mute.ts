let log: undefined | ((message?: any, ...optionalParams: any[]) => void);

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
 *      jestLogMute();
 *      test('silent testing of the `someFunction`', () => {
 *          expect(someFunction(1, 2)).toBe(3);
 *      });
 *      jestLogUnmute();
 *  });
 */
export function jestLogMute(): void {
	log = console.log;
	console.log = (): void => undefined;
}

/** @see {jestLogMute} */
export function jestLogUnmute(): void {
	if (log !== undefined) {
		console.log = log;
		log = undefined;
	}
}
