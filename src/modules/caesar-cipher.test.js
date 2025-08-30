import caesarCipher from './caesar-cipher';

test('caeser cipher one word', () => {
  expect(caesarCipher('hello', 2)).toBe('jgnnq');
});

test('caeser cipher sentence', () => {
  expect(caesarCipher('hello this is an encripted message', 2)).toBe(
    'jgnnq vjku ku cp gpetkrvgf oguucig',
  );
});

test('caeser cipher last letter of alphabet', () => {
  expect(caesarCipher('z', 2)).toBe('b');
});

test('caeser cipher capitalization maintained', () => {
  expect(caesarCipher('HeLLo', 2)).toBe('JgNNq');
});

test('caeser cipher punctuation', () => {
  expect(caesarCipher('i have, punctuations.!', 2)).toBe(
    'k jcxg, rwpevwcvkqpu.!',
  );
});
