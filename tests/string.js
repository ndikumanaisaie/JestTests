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

module.exports.reverseString = (str) => {
  const mystrArray = str.split('');
  const reverseArray = mystrArray.reverse();
  const joinedArray = reverseArray.join('');
  return joinedArray;
};

module.exports.mathOperations = {
  sum(a, b) {
    return a + b;
  },

  diff(a, b) {
    return a - b;
  },
  product(a, b) {
    return a * b;
  },
};
