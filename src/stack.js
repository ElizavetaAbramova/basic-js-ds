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

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
  }
}
class Stack {

  constructor() {
    this.head = null;
  }

  push(element) {
    let newNode = new Node(element);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.prev = this.head;
      this.head = newNode;
    }
  }

  pop() {
    let deleted = this.head;
    this.head = deleted.prev;
    return deleted.value;
  }

  peek() {
    return this.head.value;
  }
}

module.exports = {
  Stack
};
