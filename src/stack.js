const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {

  constructor() {
    this.stackArray = [];
    this.length = 0;
  }

  push(element) {
    this.stackArray[this.length] = element;
    this.length += 1;
  }

  pop() {
    let deleted = this.stackArray[this.length - 1];
    this.stackArray = this.stackArray.slice(0, this.length - 1);
    this.length -= 1;
    return deleted;
  }

  peek() {
    return this.stackArray[this.length - 1];
  }
}

module.exports = {
  Stack
};
