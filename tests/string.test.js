const strModule = require('./string.js');

describe('Sum operations', () => {
  test('sum', () => {
    expect(strModule.mathOperations.sum(4, 5)).toBe(9);
  });

  test('sum', () => {
    expect(strModule.mathOperations.sum(7, 3)).toBe(10);
  });

  test('sum', () => {
    expect(strModule.mathOperations.sum(12, 24)).toBe(36);
  });
});

// Diff operation
describe('Diff operations', () => {
  test('diff', () => {
    expect(strModule.mathOperations.diff(4, 5)).toBe(-1);
  });

  test('diff', () => {
    expect(strModule.mathOperations.diff(7, 3)).toBe(4);
  });

  test('diff', () => {
    expect(strModule.mathOperations.diff(124, 24)).toBe(100);
  });
});

describe('product operations', () => {
  test('mult', () => {
    expect(strModule.mathOperations.product(4, 5)).toBe(20);
  });

  test('mult', () => {
    expect(strModule.mathOperations.product(7, 3)).toBe(21);
  });

  test('mult', () => {
    expect(strModule.mathOperations.product(2, 24)).toBe(48);
  });
});