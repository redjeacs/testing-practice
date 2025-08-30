import analyzeArray from './analyze-array';

test('not an array', () => {
  expect(analyzeArray(1)).toBe(false);
});

test('array contains non number elements ', () => {
  expect(analyzeArray([1, 'two'])).toEqual(false);
});

test('analyze ordered array', () => {
  expect(analyzeArray([1, 2, 3])).toEqual({
    average: 2,
    min: 1,
    max: 3,
    length: 3,
  });
});

test('analyze unordered array', () => {
  expect(analyzeArray([5, 1, 6, 2, 3, 4])).toEqual({
    average: 3.5,
    min: 1,
    max: 6,
    length: 6,
  });
});

test('analyze array with duplicate numbers', () => {
  expect(analyzeArray([1, 2, 3, 3, 3])).toEqual({
    average: 2.4,
    min: 1,
    max: 3,
    length: 5,
  });
});
