const strModule = require('./string.js');

test('length of isaie equals 5', () => {
  expect(strModule.stringLength('isaie')).toBe(5);
});