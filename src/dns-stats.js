const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let objDomains = new Object();
  let subDomians = new Array();
  console.log(objDomains);

  for (var i = 0; i < domains.length; i++) {
    subDomians = subDomians.concat(subDomians, domains[i].split(".").reverse());
  }
  let uniq = [...new Set(subDomians)];
  console.log(subDomians);
  console.log(uniq);
  let tag = "";
  for (var j = 0; j < uniq.length; j++) {
    let tagCount = 0;
    for (var k = 0; k < domains.length; k++) {
      if (domains[k].includes(uniq[j])) {
        tagCount += 1;
        console.log("true");
      }
    }
    tag += `.${uniq[j]}`;
    objDomains[tag] = tagCount;
    console.log(objDomains);
  }
  return objDomains;
}

module.exports = {
  getDNSStats,
};
