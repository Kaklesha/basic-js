const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample( /*sampleActivity*/ ) {
  // if(Number.isInteger(Number(sampleActivity)))
  //   return Math.log10(MODERN_ACTIVITY/sampleActivity)/HALF_LIFE_PERIOD;
  // console.log(` ${sampleActivity} ${letg}`);
  //f
  //console.log(` ${sampleActivity} ${letg}`);
  // return false;
  
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

}
//Для расчёта, там по сути задание - расчёт по формуле
// N0 = 15 и k = 5730 yr - константы, они уже даны в коде
// N - входящее
module.exports = {
  dateSample
};
