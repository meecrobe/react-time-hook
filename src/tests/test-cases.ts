export interface TestCase {
  value: string;
  result: string;
}

export const testCasesFor12hour: TestCase[] = [
  {
    value: '',
    result: '12:00 AM',
  },
  {
    value: '0',
    result: '12:00 AM',
  },
  {
    value: '1',
    result: '01:00 AM',
  },
  {
    value: '10',
    result: '10:00 AM',
  },
  {
    value: '12',
    result: '12:00 PM',
  },
  {
    value: '13',
    result: '01:00 PM',
  },
  {
    value: '24',
    result: '12:00 AM',
  },
  {
    value: '99',
    result: '12:00 AM',
  },
  {
    value: '345',
    result: '03:45 AM',
  },
  {
    value: '1334',
    result: '01:34 PM',
  },
  {
    value: '5889',
    result: '12:00 AM',
  },
  {
    value: '1:4',
    result: '01:04 AM',
  },
  {
    value: '11:4',
    result: '11:04 AM',
  },
  {
    value: '26:09',
    result: '12:09 AM',
  },
  {
    value: '12:20',
    result: '12:20 PM',
  },
  {
    value: '2000',
    result: '08:00 PM',
  },
  {
    value: '3p',
    result: '03:00 PM',
  },
  {
    value: '8:21p',
    result: '08:21 PM',
  },
  {
    value: '821p',
    result: '08:21 PM',
  },
  {
    value: '1201am',
    result: '12:01 AM',
  },
];

export const testCasesFor24hour: TestCase[] = [
  {
    value: '1',
    result: '01:00',
  },
  {
    value: '10',
    result: '10:00',
  },
  {
    value: '111',
    result: '01:11',
  },
  {
    value: '153',
    result: '01:53',
  },
  {
    value: '1820',
    result: '18:20',
  },
  {
    value: '2400',
    result: '00:00',
  },
  {
    value: '1:4',
    result: '01:04',
  },
  {
    value: '11:4',
    result: '11:04',
  },
  {
    value: '2244',
    result: '22:44',
  },
  {
    value: '3p',
    result: '15:00',
  },
  {
    value: '8:21am',
    result: '08:21',
  },
  {
    value: '8:21p',
    result: '20:21',
  },
  {
    value: '821p',
    result: '20:21',
  },
  {
    value: '3p',
    result: '15:00',
  },
  {
    value: '8:21p',
    result: '20:21',
  },
  {
    value: '03:55 AM',
    result: '03:55',
  },
  {
    value: '03:55 PM',
    result: '15:55',
  },
  {
    value: '12:01 AM',
    result: '00:01',
  },
  {
    value: '1201a',
    result: '00:01',
  },
  {
    value: '00:55',
    result: '00:55',
  },
  {
    value: '66:66',
    result: '00:00',
  },
];
