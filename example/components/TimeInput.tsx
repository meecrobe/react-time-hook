import * as React from 'react';
import { useTime, convert } from '../../.';

interface TimeInputProps {
  value: string;
  format?: '12' | '24';
}

export function TimeInput({
  value: initialValue,
  format = '12',
}: TimeInputProps) {
  const [value, setValue] = React.useState(initialValue);
  const time = useTime(value, format);

  const handleChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleBlur = React.useCallback(
    (e) => {
      setValue(time);
    },
    [time],
  );

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Enter time"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}
