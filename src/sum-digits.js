const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function findDigitForNum(argument) {
    let arr = argument.toString().split("");
    console.log(arr);
    let summ = (arr) => {
      let result = 0;
      arr.forEach((element) => {
        result += Number(element);
      });
      return result;
    };
    console.log(summ(arr));
    if (summ(arr).toString().length > 1) {
      console.log("flag1");
      return findDigitForNum(summ(arr));
    }

    console.log("flag2");

    return summ(arr);
  }
  return findDigitForNum(n);
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
}

module.exports = {
  getSumOfDigits,
};
