import {
  getHoursAndMinutes,
  getTimePeriod,
  convertTo12Hour,
  convertTo24Hour,
} from '../';

describe('getHoursAndMinutes()', () => {
  it('should return [12, 13]', () => {
    expect(getHoursAndMinutes('12:13')).toEqual([12, 13]);
    expect(getHoursAndMinutes('1213')).toEqual([12, 13]);
  });

  it('should return [3, 15]', () => {
    expect(getHoursAndMinutes('3:15')).toEqual([3, 15]);
    expect(getHoursAndMinutes('315')).toEqual([3, 15]);
  });

  it('should return [5, 8]', () => {
    expect(getHoursAndMinutes('508')).toEqual([5, 8]);
  });

  it('should return [2, 0]', () => {
    expect(getHoursAndMinutes('2')).toEqual([2, 0]);
  });

  it('should return [12, 0]', () => {
    expect(getHoursAndMinutes('12')).toEqual([12, 0]);
  });
});

describe('getTimePeriod()', () => {
  it('should return "AM"', () => {
    expect(getTimePeriod('1234AM')).toBe('AM');
    expect(getTimePeriod('1234a')).toBe('AM');
    expect(getTimePeriod('1234aM')).toBe('AM');
  });

  it('should return "PM"', () => {
    expect(getTimePeriod('1234PM')).toBe('PM');
    expect(getTimePeriod('1234p')).toBe('PM');
    expect(getTimePeriod('1234pM')).toBe('PM');
  });

  it('should return null', () => {
    expect(getTimePeriod('1234')).toBeNull();
    expect(getTimePeriod('0')).toBeNull();
    expect(getTimePeriod('12:34')).toBeNull();
    expect(getTimePeriod('1:1')).toBeNull();
  });
});

describe('convertTo12Hour()', () => {
  it('should return "12:34 AM"', () => {
    expect(convertTo12Hour(0, 34, 'AM')).toBe('12:34 AM');
    expect(convertTo12Hour(35, 34, 'AM')).toBe('12:34 AM');
    expect(convertTo12Hour(12, 34, 'AM')).toBe('12:34 AM');
  });

  it('should return "12:00 PM"', () => {
    expect(convertTo12Hour(0, 0, 'AM')).toBe('12:00 AM');
  });

  it('should return "12:34 PM"', () => {
    expect(convertTo12Hour(12, 34, null)).toBe('12:34 PM');
    expect(convertTo12Hour(12, 34, 'PM')).toBe('12:34 PM');
  });

  it('should return "03:13 PM"', () => {
    expect(convertTo12Hour(3, 13, 'PM')).toBe('03:13 PM');
  });
});

describe('convertTo24Hour()', () => {
  it('should return "00:34"', () => {
    expect(convertTo24Hour(12, 34, 'AM')).toBe('00:34');
    expect(convertTo24Hour(24, 34, 'AM')).toBe('00:34');
    expect(convertTo24Hour(50, 34, 'AM')).toBe('00:34');
    expect(convertTo24Hour(50, 34, null)).toBe('00:34');
  });

  it('should return "10:00"', () => {
    expect(convertTo24Hour(10, 0, 'AM')).toBe('10:00');
    expect(convertTo24Hour(10, 88, 'AM')).toBe('10:00');
    expect(convertTo24Hour(10, 88, null)).toBe('10:00');
  });

  it('should return "00:01"', () => {
    expect(convertTo24Hour(0, 1, 'AM')).toBe('00:01');
    expect(convertTo24Hour(0, 1, null)).toBe('00:01');
  });

  it('should return "20:17', () => {
    expect(convertTo24Hour(8, 17, 'PM')).toBe('20:17');
    expect(convertTo24Hour(20, 17, 'PM')).toBe('20:17');
    expect(convertTo24Hour(20, 17, null)).toBe('20:17');
  });
});
