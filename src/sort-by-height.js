const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
   throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let subarr=new Array();
  // The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
  
  for (var prop in arr) {
    console.log(arr[prop])
    if(arr[prop]>0) subarr.push(arr[prop]);
    
  }
  subarr=subarr.sort();
     console.log(subarr)
     let j=0;
     for (var i = 0; i < arr.length; i++) {
      if(arr[i]>0){arr[i]=subarr[j]; j++};
     }
     return arr;
}

module.exports = {
  sortByHeight
};
