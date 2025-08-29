import capitalize from './capitalize';

test('capitalize string', () => {
  expect(capitalize('hello world')).toBe('Hello world');
});

test('capitalize string with random capital letters', () => {
  expect(capitalize('wOrd with Random Capitalized lEtters')).toBe(
    'WOrd with Random Capitalized lEtters',
  );
});
