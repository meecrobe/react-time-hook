import { useEffect, useState } from 'react';
import {
  getHoursAndMinutes,
  getTimePeriod,
  convertTo12Hour,
  convertTo24Hour,
} from './utilities';

export const regExp = new RegExp(/^\d{1,2}:?(\d{1,2})?\s?([ap]m?)?$/, 'i');

type TimeFormat = '12' | '24';

export function useTime(
  initialValue: string,
  format: TimeFormat = '12',
): string {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const time = convert(initialValue, format);

    if (time) {
      setValue(time);
    }
  }, [initialValue, format]);

  return value;
}

export function convert(
  value: string,
  format: TimeFormat,
  padHoursWithZero: boolean = false,
) {
  const lowercaseValue = value.toLowerCase();

  if (!regExp.test(lowercaseValue)) {
    return null;
  }

  const [hours, minutes] = getHoursAndMinutes(value);
  const timePeriod = getTimePeriod(value);

  return format === '12'
    ? convertTo12Hour(hours, minutes, timePeriod, padHoursWithZero)
    : convertTo24Hour(hours, minutes, timePeriod);
}
