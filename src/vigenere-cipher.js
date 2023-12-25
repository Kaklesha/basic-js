const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(reverse) {
    this.reverse = reverse === false ? true : false;
  }
  getEncodingOfChar(m, k) {

    const slide = 65;
    let dif = m + k - slide * 2;
    while (dif + slide > 90) {
      dif -= 26;
    }
    return String.fromCharCode(dif + slide);
  }
  getDecocingOfChar(m, k) {
    let slide = 65;
    let dif = m - slide;
    while (dif < 65) {
      dif += 26;
    }
    dif = dif - k + slide * 2;
    while (dif > 90) {
      dif -= 26;
    }
    return String.fromCharCode(dif);
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let mesUpCause = this.reverse
      ? message.toUpperCase().split("").reverse().join("")
      : message.toUpperCase();
    let strK = "";
    let strKCount = 0;
    let encryption = "";
    while (strK.length < mesUpCause.length) {
      strK += this.reverse
        ? key.toUpperCase().split("").reverse().join("")
        : key.toUpperCase();
    }
    for (let i = 0; i < mesUpCause.length; i++) {
      if (!(65 <= mesUpCause.charCodeAt(i) && mesUpCause.charCodeAt(i) <= 90)) {
        encryption += mesUpCause[i];
        continue;
      }
      encryption += this.getEncodingOfChar(
        mesUpCause.charCodeAt(i),
        strK.charCodeAt(strKCount)
      );
      strKCount++;
    }
    return this.reverse ? encryption.split("").reverse().join("") : encryption;
  }
  decrypt(message, key) {
    let slide = 64;
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    let mesUpCause = message.toUpperCase();
    let strK = "";
    let strKCount = 0;
    let dump = "";
    while (strK.length < mesUpCause.length) {
      strK += this.reverse
        ? key.toUpperCase().split("").reverse().join("")
        : key.toUpperCase();
    }
    for (let i = 0; i < mesUpCause.length; i++) {
      if (!(65 <= mesUpCause.charCodeAt(i) && mesUpCause.charCodeAt(i) <= 90)) {
        dump += mesUpCause[i];
        continue;
      }
      dump += this.getDecocingOfChar(
        mesUpCause.charCodeAt(i),
        strK.charCodeAt(strKCount)
      );
      strKCount++;
    }
    return dump;
  }
}

module.exports = {
  VigenereCipheringMachine,
};
