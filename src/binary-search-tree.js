const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
    this.count = 0;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    let newItem = new Node(data);

    const search = node => {
      if (this.rootNode === null) {
        this.rootNode = newItem;
        this.count++;
      } else {
        if (data < node.data) {
          if (!node.left) {
            node.left = newItem;
            this.count++;
          } else {
            search(node.left);
          }
        } else if (data > node.data) {
          if (!node.right) {
            node.right = newItem;
            this.count++;
          } else {
            search(node.right);
          }
        }
      }
    }
    search(this.rootNode);
  }

  has(data) {
    if (this.find(data)) return true;
    else return false;
  }

  find(data) {
    if (!this.rootNode) return false;

    let current = this.rootNode;
    let found = null;

    while (current && !found) {
      if (data < current.data) {
        current = current.left
      } else if (data > current.data) {
        current = current.right;
      } else {
        found = current
      }
    }

    return found;
  }

  remove(data) {
    // if (!this.rootNode || !this.find(data)) return false;
    // let current = this.rootNode;
    // let nodeToDelete = null;
    // let parent = null;

    // while (current && !nodeToDelete) {
    //   if (data < current.data) {
    //     parent = current;
    //     current = current.left
    //   } else if (data > current.data) {
    //     parent = current;
    //     current = current.right;
    //   } else {
    //     nodeToDelete = current;
    //   }
    // }

    // if (nodeToDelete.left === null && nodeToDelete.right === null) {
    //   if (nodeToDelete.data > parent.data) {
    //     parent.right = null;
    //   } else {
    //     parent.left = null;
    //   }
    //   nodeToDelete = null;
    //   this.count--;
    // } else if (nodeToDelete.left !== null && nodeToDelete.right === null) {
    //   let replace = nodeToDelete.left;
    //   nodeToDelete.left = null;
    //   nodeToDelete = replace;
    //   if (nodeToDelete.data > parent.data) {
    //     parent.right = nodeToDelete;
    //   } else {
    //     parent.left = nodeToDelete;
    //   }
    //   this.count--;
    // } else if (nodeToDelete.right !== null && nodeToDelete.left === null) {
    //   let replace = nodeToDelete.right;
    //   nodeToDelete.right = null;
    //   nodeToDelete = replace;
    //   if (nodeToDelete.data > parent.data) {
    //     parent.right = nodeToDelete;
    //   } else {
    //     parent.left = nodeToDelete;
    //   }
    //   this.count--;
    // }
    // else {
    //   let replace = nodeToDelete.right;
    //   let parent = nodeToDelete;
    //   while (replace.left) {
    //     parent = replace;
    //     replace = replace.left;
    //   }
    //   let rightTree = nodeToDelete.right;
    //   let leftTree = nodeToDelete.left;
    //   nodeToDelete = replace;
    //   parent.left = null;
    //   nodeToDelete.left = leftTree;
    //   nodeToDelete.right = rightTree;
    // }

    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    let current = this.rootNode;
    while (current.left) {
      current =  current.left;
    }
    return current.data;
  }

  max() {
    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }
}

module.exports = {
  BinarySearchTree
};