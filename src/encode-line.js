const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  let n = str;
//2a3bc
n = n.toString();
let obj= new Object();
//For aabbbc should return 2a3bc
let uniq = [...new Set(n)];
 console.log(uniq)
 let count=0;
 for (var i = 0; i < uniq.length; i++) {
    count=0;
    for (var j = 0; j < n.length; j++) {
      if(uniq[i]===n[j])count+=1;;
    }
    obj[uniq[i]]=count;
 }
 console.log(obj);
 let dump="";
 for (var prop in obj) {
     console.log(prop);
      console.log(obj[prop]);
      if(obj[prop]>1){dump+=obj[prop]+prop}else{dump+=prop}
      
   //  console.log(Object.entries(obj) );
}
return dump;
 
}

module.exports = {
  encodeLine
};
