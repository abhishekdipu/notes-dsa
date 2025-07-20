import {Tree} from './Tree.js';

class EqualTree extends Tree {
  // O(n  + m)
  equals(root1, root2) {
    if (root1 == null && root2 == null) return true;
    if (root1 == null || root2 == null) return false; //it'll come here is 1st condition is false, here checking if one root is not and other is not null

    return root1.data == root2.data && this.equals(root1.leftChild, root2.leftChild) && this.equals(root1.rightChild, root2.rightChild);
  }
}

let bst = new EqualTree();
bst.insert(7);
bst.insert(4);
bst.insert(9);
bst.insert(1);
bst.insert(6);
bst.insert(8);
bst.insert(10);

let bst2 = new EqualTree();
bst2.insert(7);
bst2.insert(4);
bst2.insert(9);
bst2.insert(1);
bst2.insert(6);
bst2.insert(8);
bst2.insert(10);

console.log(bst.equals(bst.root, bst2.root));
// console.log(bst.equals(bst.root, null));

/*
LC-100 : https://leetcode.com/problems/same-tree/description/
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.
*/
