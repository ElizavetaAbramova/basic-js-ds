const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Queue {

  constructor() {
    this.start = null;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    let newItem = new Node(value);
    if (!this.start) {
      this.start = newItem;
    } else {
      let current = this.start;
      while (current.next) {
        current = current.next;
      }
      current.next = newItem;
    }
  }

  dequeue() {
    if (!this.start) return false;
    let result = this.start;
    this.start = result.next;
    return result.value;
  }
}

module.exports = {
  Queue
};
