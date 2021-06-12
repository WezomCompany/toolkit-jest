import { jestLogMute, jestLogUnmute } from '../index';

describe('Check specs', () => {
	const testMsg = 'Lorem ipsum!';
	const testFn = (): void => console.log(testMsg);
	let defaultLog: (...args: any[]) => void;
	const setSpyAndGetList = (): any[][] => {
		const spyList: any[][] = [];
		const spyLog = (...args: any[]): void => {
			spyList.push(args);
		};
		defaultLog = console.log;
		console.log = spyLog;
		return spyList;
	};

	const removeSpy = (): void => {
		if (defaultLog !== undefined) {
			console.log = defaultLog;
		}
	};

	test('Should mute and unmute `console.log`', () => {
		// try spy
		const spyList1 = setSpyAndGetList();
		testFn();
		expect(spyList1).toEqual([[testMsg]]);
		removeSpy();

		// try mute and unmute
		const spyList2 = setSpyAndGetList();
		jestLogMute();
		testFn();
		expect(spyList2).toEqual([]);
		jestLogUnmute();
		testFn();
		expect(spyList2).toEqual([[testMsg]]);
		removeSpy();
	});

	test('Should do nothing if call only unmute', () => {
		const spyList1 = setSpyAndGetList();
		jestLogUnmute();
		testFn();
		expect(spyList1).toEqual([[testMsg]]);
		removeSpy();
	});
});
