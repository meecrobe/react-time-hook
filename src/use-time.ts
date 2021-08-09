import { useEffect, useState } from 'react';
import {
  getHoursAndMinutes,
  getTimePeriod,
  convertTo12Hour,
  convertTo24Hour,
} from './utilities';

export const regExp = new RegExp(/^\d{1,2}:?(\d{1,2})?\s?([ap]m?)?$/, 'i');

export function useTime(
  initialValue: string,
  format: '12' | '24' = '12',
): string {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    const lowercaseValue = initialValue.toLowerCase();
    let time = format === '12' ? '12:00 AM' : '12:00';

    if (!regExp.test(lowercaseValue)) {
      setValue(time);

      return;
    }

    const [hours, minutes] = getHoursAndMinutes(initialValue);
    const timePeriod = getTimePeriod(initialValue);

    if (format === '12') {
      time = convertTo12Hour(hours, minutes, timePeriod);
    } else {
      time = convertTo24Hour(hours, minutes, timePeriod);
    }

    setValue(time);
  }, [initialValue, format]);

  return value;
}
