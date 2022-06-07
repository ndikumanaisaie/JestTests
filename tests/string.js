module.exports = {};

// function stringLenght(str) {
//   return str.length;
// }

module.exports.stringLenght = (str) => {
  if (str.length === 0) {
    throw new Error('use the correct string');
  }
  return str.length;
  // if (num === undefined || typeof num !== 'number') {
  //   throw new Error('You must provide a number.');
  // }
  // return num * num;
};
