const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  referencies: new Array(),
  getLength() {
    return this.referencies.length;
  },
  addLink(value) {
    this.referencies.push(`${value}`);
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== "number" ||
      !(1 <= position && position <= this.referencies.length)
    ) {
      this.referencies = new Array();
      throw new Error("You can't remove incorrect link!");
    }
    this.referencies.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.referencies.reverse();
    return this;
  },
  finishChain() {
    let chain = `( ${this.referencies[0]} )`;
    for (let i = 1; i < this.referencies.length; i++) {
      chain += `~~( ${this.referencies[i]} )`;
    }
    this.referencies = new Array();
    return chain;
  },
};

module.exports = {
  chainMaker,
};
