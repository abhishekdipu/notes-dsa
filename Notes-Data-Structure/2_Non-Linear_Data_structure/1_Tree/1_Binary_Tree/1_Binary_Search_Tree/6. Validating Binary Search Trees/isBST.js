import {Tree} from './Tree.js';

class IsBST extends Tree {
  //Traversal : preOrder
  //TC : O(n)
  isBST(root, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
    if (root == null) return true;
    if (root.data < min || root.data > max) return false;

    return this.isBST(root.leftChild, min, root.data - 1) && this.isBST(root.rightChild, root.data + 1, max);
  }

  //for testing : to change BST to normal Binary Tree, we swap this leftChild, rightChild
  swapRoot(root) {
    let temp = root.leftChild;
    root.leftChild = root.rightChild;
    root.rightChild = temp;
  }
}

let bst = new IsBST();
bst.insert(7);
bst.insert(4);
bst.insert(9);
bst.insert(1);
bst.insert(6);
bst.insert(8);
bst.insert(10);

console.log('-------------for bst--------------');
console.log(bst.isBST(bst.root));

console.log('-------------for non-bst--------------');
bst.swapRoot(bst.root);
console.log(bst.isBST(bst.root));

/*
LC : https://leetcode.com/problems/validate-binary-search-tree/description/

*/
