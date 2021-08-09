import { renderHook } from '@testing-library/react-hooks';
import { regExp, useTime } from '../use-time';
import { testCasesFor12hour, testCasesFor24hour, TestCase } from './test-cases';

describe('Regular expression', () => {
  it('should evaluate to true', () => {
    expect(regExp.test('1')).toBe(true);
    expect(regExp.test('12')).toBe(true);
    expect(regExp.test('123')).toBe(true);
    expect(regExp.test('1234')).toBe(true);
    expect(regExp.test('1:2')).toBe(true);
    expect(regExp.test('12:30')).toBe(true);
    expect(regExp.test('1:2p')).toBe(true);
    expect(regExp.test('1:2pm')).toBe(true);
    expect(regExp.test('1234a')).toBe(true);
    expect(regExp.test('1234p')).toBe(true);
    expect(regExp.test('1234pm')).toBe(true);
    expect(regExp.test('1234am')).toBe(true);
    expect(regExp.test('1:2 p')).toBe(true);
    expect(regExp.test('1:2 pm')).toBe(true);
    expect(regExp.test('1234 a')).toBe(true);
    expect(regExp.test('1234 p')).toBe(true);
    expect(regExp.test('1234 pm')).toBe(true);
    expect(regExp.test('1234 am')).toBe(true);
    expect(regExp.test('1p')).toBe(true);
    expect(regExp.test('1am')).toBe(true);
  });

  it('should evaluate to false', () => {
    expect(regExp.test('12m')).toBe(false);
    expect(regExp.test('12345')).toBe(false);
    expect(regExp.test('12345678')).toBe(false);
    expect(regExp.test('123:12')).toBe(false);
    expect(regExp.test('123:123')).toBe(false);
    expect(regExp.test('1:2:3')).toBe(false);
  });
});

describe('useTime()', () => {
  describe('12-hour format', () => {
    let initialValue = '0';
    const { result, rerender } = renderHook(() => useTime(initialValue));

    testCasesFor12hour.forEach((testCase: TestCase) => {
      it(`"${testCase.value}" should return "${testCase.result}"`, () => {
        initialValue = testCase.value;
        rerender();

        expect(result.current).toBe(testCase.result);
      });
    });
  });

  describe('24-hour format', () => {
    let initialValue = '0';
    const { result, rerender } = renderHook(() => useTime(initialValue, '24'));

    testCasesFor24hour.forEach((testCase: TestCase) => {
      it(`"${testCase.value}" should return "${testCase.result}"`, () => {
        initialValue = testCase.value;
        rerender();

        expect(result.current).toBe(testCase.result);
      });
    });
  });
});
