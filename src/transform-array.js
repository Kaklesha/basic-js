const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  let dumpArr = [...arr];
  let outArr = [];
  let i = 0;
  while(i < dumpArr.length) {
    switch (dumpArr[i]) {
      case '--discard-next':
        dumpArr[i+1] = null;
        break;
      case '--discard-prev':
        if (dumpArr[i-1]) {
          outArr.pop();
        }
        dumpArr[i-1] = null;
        break;
      case '--double-next':
        if (dumpArr[i+1]) {
          outArr.push(dumpArr[i+1]);
        }
        break;
      case '--double-prev':
        if (dumpArr[i-1]) {
          outArr.push(dumpArr[i-1]);;
        }
        break;
      default:
        if (dumpArr[i]) {
          outArr.push(dumpArr[i]);
        }
        break;
    }
    i++;
  }
  return outArr;
}

module.exports = {
  transform
};
