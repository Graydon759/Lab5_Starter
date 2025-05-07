// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

//Phone nums
test('Valid phone num with () and dashes', () => {
  expect(isPhoneNumber('(310) 123-4567')).toBe(true);
});
test('Valid phone num with no starting ()', () => {
  expect(isPhoneNumber('310-123-4567')).toBe(true);
});
test('Invalid phone num with letters', () => {
  expect(isPhoneNumber('(bac) 123-dsf')).toBe(false);
});
test('Valid phone num with too few digits', () => {
  expect(isPhoneNumber('(310) 123')).toBe(false);
});
//Emails
test('Valid emails', () => {
  expect(isEmail('graydon@ucsd.edu')).toBe(true);
});
test('Valid email with an underscore', () => {
  expect(isEmail('firstName_lastName@gmail.com')).toBe(true);
});
test('Invalid email without a .com', () => {
  expect(isEmail('test@')).toBe(false);
});
test('Invalid email with too many things after .', () => {
  expect(isEmail('g@ieng6.ucsd.edu')).toBe(false);
});
//Passwords
test('Valid password', () => {
  expect(isStrongPassword('ADSOjI')).toBe(true);
});
test('Valid shortest with max length', () => {
  expect(isStrongPassword('AJSFOIj9fd0_gkm')).toBe(true);
});
test('Invalid password becasue its too long', () => {
  expect(isStrongPassword('adfsoijv0adjvcvca9kdf_')).toBe(false);
});
test('Invalid password beacuse it starts with a _', () => {
  expect(isStrongPassword('_ajsfdoajdis')).toBe(false);
});
//Dates
test('Valid single digit date', () => {
  expect(isDate('1/2/1999')).toBe(true);
});
test('Valid double digit date', () => {
  expect(isDate('12/34/2025')).toBe(true);
});
test('Invalid date in bad format', () => {
  expect(isDate('1/1/72')).toBe(false);
});
test('Invalid date with letters', () => {
  expect(isDate('May/5/2000')).toBe(false);
});
//Colors
test('Valid 3 chars', () => {
  expect(isHexColor('#e9f')).toBe(true);
});
test('Valid 6 chars', () => {
  expect(isHexColor('#ab12c3')).toBe(true);
});
test('Invalid hex chars', () => {
  expect(isHexColor('#zyx')).toBe(false);
});
test('Invalid too short', () => {
  expect(isHexColor('#a')).toBe(false);
});