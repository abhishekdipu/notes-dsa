import {Tree} from './Tree.js';

class Traversal extends Tree {
  //traversal
  traversePreOrder(root) {
    if (root == null) return;
    console.log(root.data);
    this.traversePreOrder(root.leftChild);
    this.traversePreOrder(root.rightChild);
  }

  traverseInOrder(root) {
    if (root == null) return;
    this.traverseInOrder(root.leftChild);
    console.log(root.data);
    this.traverseInOrder(root.rightChild);
  }

  traversePostOrder(root) {
    if (root == null) return;
    this.traversePostOrder(root.leftChild);
    this.traversePostOrder(root.rightChild);
    console.log(root.data);
  }

  //traversal to return array
  traversePreOrderArr(root) {
    const nodes = [];

    const helper = (input) => {
      if (input == null) return;
      // console.log(input.data);
      nodes.push(input.data);
      helper(input.leftChild);
      helper(input.rightChild);
    };

    helper(root);
    return nodes;
  }
}

let bst = new Traversal();
bst.insert(7);
bst.insert(4);
bst.insert(9);
bst.insert(1);
bst.insert(6);
bst.insert(8);
bst.insert(10);

// console.log(bst.root);
console.log('traversePreOrder');
// bst.traversePreOrder(bst.root);
const ans = bst.traversePreOrderArr(bst.root);
console.log('ans-->', ans);

// console.log('traverseInOrder');
// bst.traverseInOrder(bst.root);

// console.log('traversePostOrder');
// bst.traversePostOrder(bst.root);
