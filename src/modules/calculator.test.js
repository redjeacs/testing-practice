import { createTestScheduler } from 'jest';
import Calculator from './calculator';

test('addition', () => {
  const calculator = new Calculator();
  expect(calculator.add(2, 6)).toBe(8);
});

test('addition with decimals to nearest thousandth', () => {
  const calculator = new Calculator();
  expect(calculator.add(2.002, 6.5)).toBe(8.502);
});

test('subtract', () => {
  const calculator = new Calculator();
  expect(calculator.subtract(2, 6)).toBe(-4);
});

test('subtract decimals', () => {
  const calculator = new Calculator();
  expect(calculator.subtract(2.01, 6.532)).toBe(-4.522);
});

test('multiply', () => {
  const calculator = new Calculator();
  expect(calculator.multiply(2, 6)).toBe(12);
});

test('product with repeating decimals', () => {
  const calculator = new Calculator();
  expect(calculator.multiply(2, 6)).toBe(12);
});

test('divide', () => {
  const calculator = new Calculator();
  expect(calculator.divide(6, 2)).toBe(3);
});

test('divide neagtive number', () => {
  const calculator = new Calculator();
  expect(calculator.divide(6, -2)).toBe(-3);
});

test('divide decimals', () => {
  const calculator = new Calculator();
  expect(calculator.divide(6.2, -2.1)).toBe(-2.952);
});
