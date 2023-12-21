const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email ) {
  // throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
  email=email.split("").reverse().join("");
  console.log(email);
  email=email.slice(0,email.indexOf('@'));
  email=email.split("").reverse().join("");
   console.log(email);
   return email
}

module.exports = {
  getEmailDomain
};
