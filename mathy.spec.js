const mathy = require('./mathy');

describe('add', () => {
  test('adds two positive numbers', () => {
    expect(mathy.add(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number', () => {
    expect(mathy.add(2, -3)).toBe(-1);
  });

  test('adds two negative numbers', () => {
    expect(mathy.add(-2, -3)).toBe(-5);
  });
});

describe('subtract', () => {
  test('subtracts two positive numbers', () => {
    expect(mathy.subtract(5, 3)).toBe(2);
  });

  test('subtracts a positive and a negative number', () => {
    expect(mathy.subtract(2, -3)).toBe(5);
  });

  test('subtracts two negative numbers', () => {
    expect(mathy.subtract(-2, -3)).toBe(1);
  });
});

describe('multiply', () => {
  test('multiplies two positive numbers', () => {
    expect(mathy.multiply(2, 3)).toBe(6);
  });

  test('multiplies a positive and a negative number', () => {
    expect(mathy.multiply(2, -3)).toBe(-6);
  });

  test('multiplies two negative numbers', () => {
    expect(mathy.multiply(-2, -3)).toBe(6);
  });
});

describe('divide', () => {
  test('divides two positive numbers', () => {
    expect(mathy.divide(6, 3)).toBe(2);
  });

  test('divides a positive and a negative number', () => {
    expect(mathy.divide(6, -3)).toBe(-2);
  });

  test('divides two negative numbers', () => {
    expect(mathy.divide(-6, -3)).toBe(2);
  });

  test('throws an error when dividing by 0', () => {
    expect(() => mathy.divide(2, 0)).toThrowError('Cannot divide by 0');
  });
});
