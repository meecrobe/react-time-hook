# react-time-hook

🕑 React hook for formatting string to 12- or 24-hour time.

![Demo](https://user-images.githubusercontent.com/8003440/128711176-2d323c95-f5f4-47de-9e9c-d572e01f9e10.gif)

[Live demo](https://meecrobe.github.io/react-time-hook/)

## Installation

```bash
$ yarn add @meecrobe/react-time-hook
```

## Usage

```typescript
import { useCallback, useState } from 'react';
import { useTime } from '@meecrobe/react-time-hook';

function TimeInput() {
  const [value, setValue] = useState('');
  const time = useTime(value);

  const handleChange = React.useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const handleBlur = React.useCallback(() => {
    setValue(time);
  }, [time]);

  return (
    <input
      type="text"
      value={value}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}
```

## Examples of string values and their formatting results

<details>
<summary>To 12-hour time format</summary>

| Input      | Output        |
| ---------- | ------------- |
| `''`       | `'12:00 AM'`  |
| `'0'`      | `'12:00 AM'`  |
| `'1'`      | `'01:00 AM'`  |
| `'10'`     | `'10:00 AM'`  |
| `'12'`     | `'12:00 PM'`  |
| `'13'`     | `'01:00 PM'`  |
| `'24'`     | `'12:00 AM' ` |
| `'99'`     | `'12:00 AM' ` |
| `'345'`    | `'03:45 AM'`  |
| `'1334' `  | `'01:34 PM' ` |
| `'5889'`   | `'12:00 AM'`  |
| `'1:4'`    | `'01:04 AM'`  |
| `'11:4'`   | `'11:04 AM'`  |
| `'26:09'`  | `'12:09 AM'`  |
| `'12:20'`  | `'12:20 PM' ` |
| `'2000'`   | `'08:00 PM'`  |
| `'3p'`     | `'03:00 PM `  |
| `'8:21p'`  | `'08:21 PM'`  |
| `'821p'`   | `'08:21 PM' ` |
| `'1201am'` | `'12:01 AM'`  |

</details>

<details>
<summary>To 24-hour time format</summary>

| Input        | Output    |
| ------------ | --------- |
| `'1'`        | `'01:00'` |
| `'10'`       | `'10:00'` |
| `'111'`      | `'01:11'` |
| `'153'`      | `'01:53'` |
| `'1820'`     | `'18:20'` |
| `'2400'`     | `'00:00'` |
| `'1:4'`      | `'01:04'` |
| `'11:4'`     | `'11:04'` |
| `'2244'`     | `'22:44'` |
| `'3p'`       | `'15:00'` |
| `'8:21am'`   | `'08:21'` |
| `'8:21p'`    | `'20:21'` |
| `'821p'`     | `'20:21'` |
| `'3p'`       | `'15:00'` |
| `'8:21p'`    | `'20:21'` |
| `'03:55 AM'` | `'03:55'` |
| `'03:55 PM'` | `'15:55'` |
| `'12:01 AM'` | `'00:01'` |
| `'1201a'`    | `'00:01'` |
| `'00:55'`    | `'00:55'` |
| `'66:66'`    | `'00:00'` |

</details>
