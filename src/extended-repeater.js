const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let addition = "";
  if (options["addition"]) {
    addition = `${options["addition"]}`;
  } else if (options["addition"] === false) {
    addition = "false";
  } else if (options["addition"] === null) {
    addition = "null";
  }

  let additionSeparator = "|";
  if (options["additionSeparator"]) {
    additionSeparator = options["additionSeparator"];
  }
  let additionRepeatTimes = 0;
  if (options["additionRepeatTimes"]) {
    additionRepeatTimes = options["additionRepeatTimes"];
  }

  console.log(options["repeatTimes"]);

  function init(str, repeatTimes, separator, trashMark, signatureaddfucn) {
    let signature = signatureaddfucn(
      addition,
      additionRepeatTimes,
      additionSeparator,
      "#"
    );
    let dump = str + signature;
    while (repeatTimes - 1 > 0) {
      dump += trashMark + str + signature;
      repeatTimes -= 1;
    }
    dump = dump.replaceAll(trashMark, separator);
    console.log(dump);
    return dump;
  }
  //options['addition'],options['additionRepeatTimes'],options['additionSeparator'],"<#>",''
  function initInsertInto(str, repeatTimes, separator, trashMark) {
    let dump = str;
    while (repeatTimes - 1 > 0) {
      dump += trashMark + str;
      repeatTimes -= 1;
    }
    dump = dump.replaceAll(trashMark, separator);
    //console.log(dump);
    return dump;
  }
  let separator = "+";
  if (options["separator"]) {
    separator = options["separator"];
  }

  return init(str, options["repeatTimes"], separator, "#", initInsertInto);
}

module.exports = {
  repeater,
};
