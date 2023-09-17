import {Tree} from "./Tree.js";

class MinMaxNode extends Tree {
  //Minimum Node for any binary tree
  //TC : O(n) {bcz we have to traverse every node in order to find the min}
  min(root) {
    if (root == null) return Infinity;
    if (root.leftChild == null && root.rightChild == null) return root.data;

    let left = this.min(root.leftChild);
    let right = this.min(root.rightChild);
    return Math.min(left, right, root.data);
  }

  //Maximum Node for any binary tree
  //TC : O(n) {bcz we have to traverse every node in order to find the max}
  max(root) {
    if (root == null) return -Infinity;
    if (root.leftChild == null && root.rightChild == null) return root.data;

    let left = this.max(root.leftChild);
    let right = this.max(root.rightChild);
    return Math.max(left, right, root.data);
  }

  //Minimum Node for any binary search tree
  //we have to find the left most node
  //TC : O(log n) {bcz we are narrowing down the search by half in each iteration}
  minBst(root) {
    if (root == null) return undefined;
    let current = root;
    let prev = null;
    while (current) {
      prev = current;
      current = current.leftChild;
    }
    return prev.data;
  }

  //Maximum Node for any binary search tree
  //we have to find the right most node
  //TC : O(log n) {bcz we are narrowing down the search by half in each iteration}
  maxBst(root) {
    if (root == null) return undefined;
    let current = root;
    let prev = null;
    while (current) {
      prev = current;
      current = current.rightChild;
    }
    return prev.data;
  }
}

let bst = new MinMaxNode();
bst.insert(7);
bst.insert(4);
bst.insert(9);
bst.insert(1);
bst.insert(6);
bst.insert(8);
bst.insert(10);

console.log(bst.min(bst.root));
console.log(bst.max(bst.root));
console.log(bst.minBst(bst.root));
console.log(bst.maxBst(bst.root));
