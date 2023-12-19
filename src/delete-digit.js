const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here

  n = n.toString();
  console.log(`${typeof n} - ${n}`);
  let count = 0;
  let dump = 0;
  for (var i = 0; i < n.length+1; i++) {
    if (count < dump) count = dump;
    dump = 0;
    for (var j = 0; j < n.length; j++) {
      if (j != i) dump += n[j];
      // if(strCats[j]==="^^")count+=1;
      // console.log(strCats[j]);strCats[j]
      //dump+=n[j];
    }
    dump = Number(dump);
    console.log(count);
  }
  return count;
}

module.exports = {
  deleteDigit,
};
