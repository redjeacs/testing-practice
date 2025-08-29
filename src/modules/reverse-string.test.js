import reverseString from './reverse-string';

test('reverse single word', () => {
  expect(reverseString('word')).toBe('drow');
});

test('reverse sentence', () => {
  expect(reverseString('this is a sentence')).toBe('ecnetnes a si siht');
});
