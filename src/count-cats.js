const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let strCats = Array();
  let count = 0;
  for (var i = 0; i < matrix.length; i++) {
    strCats = matrix[i];

    for (var j = 0; j < strCats.length; j++) {
      if (strCats[j] === "^^") count += 1;
      console.log(strCats[j]);
      strCats[j];
    }
  }
  return count;
}

module.exports = {
  countCats,
};
