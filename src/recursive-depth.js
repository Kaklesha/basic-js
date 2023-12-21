const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr ) {
    // throw new NotImplementedError('Not implemented');
    // // remove line with error and write your code here

    //let array = [1, 2, 3, [4, 5], [[0],3]];
   
    const sum = ([x, ...xs]) =>
    x == undefined ? 0 : x + sum (xs)
  
  const countArrays = (xs) =>
    Array .isArray (xs)
      ? 1 + sum (xs .map (countArrays))
      : 0
      
 return countArrays(arr)
  }
}

module.exports = {
  DepthCalculator
};
