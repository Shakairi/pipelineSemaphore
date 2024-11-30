const Calculator = require('../src/calculator');

describe('Calculator Operations', () => {
  test('adds two numbers', () => {
    expect(Calculator.add(2, 3)).toBe(5);
  });

  test('subtracts two numbers', () => {
    expect(Calculator.subtract(5, 3)).toBe(2);
  });

  test('multiplies two numbers', () => {
    expect(Calculator.multiply(2, 3)).toBe(6);
  });

  test('divides two numbers', () => {
    expect(Calculator.divide(6, 3)).toBe(2);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => Calculator.divide(6, 0)).toThrow('Division by zero is not allowed');
  });
});