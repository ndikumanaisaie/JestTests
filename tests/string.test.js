const strModule = require('./string.js');

test('use the correct string', () => {
  expect(() => {
    strModule.stringLenght('');
  }).toThrow('use the correct string');
});