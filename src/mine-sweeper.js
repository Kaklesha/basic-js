const { NotImplementedError } = require("../extensions/index.js");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let fields = [];
  for (let i = 0; i < matrix.length; i++) {
    let line = [];
    for (let j = 0; j < matrix[i].length; j++) {
      line.push(scanMineFields(i, j));
    }
    fields.push(line);
  }

  function scanMineFields(i, j) {
    let mineCount = 0;
    for (let item = i - 1; item < i + 2; item++) {
      for (let elem = j - 1; elem < j + 2; elem++) {
        if (
          matrix[item] !== undefined &&
          matrix[item][elem] !== undefined &&
          matrix[item][elem] &&
          !(i === item && j === elem)
        ) {
          mineCount += 1;
        }
      }
    }
    return mineCount;
  }

  return fields;
}

module.exports = {
  minesweeper,
};
