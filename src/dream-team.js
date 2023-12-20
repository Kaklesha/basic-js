const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let dump='';
  let subdump='';
  if (!Array.isArray(members)) return false
for (var prop in members) {

if(typeof(members[prop])!="string") continue;

subdump= members[prop].replace(/\s/g,'') 

if(subdump.toString().charAt(0).toUpperCase() == subdump.toString().charAt(0).toUpperCase() && typeof(subdump)!="number"){ dump+=subdump.toString().charAt(0);}

}
dump=dump.toUpperCase();
let sortString = (dump) => {
return dump.split("").sort().join("");
};

console.log( sortString(dump))
  return sortString(dump).toUpperCase();
}

module.exports = {
  createDreamTeam,
};
