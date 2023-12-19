const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let count = 0;
  for (var i = 0; i < s1.length; i++) {
    if (!!s2.toLowerCase().includes(s1[i].toLowerCase())) {
      s2 = s2.replace(s1[i], "");

      count += 1;
      console.log(`I is ${i} | ${s1[i]} is srt2 - ${s2} | ${count}`);
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount,
};
