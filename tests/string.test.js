const strModule = require('./string.js');

test('use the correct string', () => {
  expect(strModule.reverseString('hallo')).toBe('ollah');
});