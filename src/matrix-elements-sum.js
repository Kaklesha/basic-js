const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  
  const transpose = arrayfo => arrayfo[0].map((col, i) => arrayfo.map(row => row[i]));
  
  console.log(transpose(matrix));
  let submatrix = transpose(matrix)
  let dump=0;
  for (var prop in submatrix) {
    console.log(submatrix[prop]);
    for (var item in submatrix[prop]) {
      if(submatrix[prop][item]===0)break;
      console.log(submatrix[prop][item]);
      dump+=submatrix[prop][item];
    }
  }
   console.log(dump);

  return dump;
}

module.exports = {
  getMatrixElementsSum
};
