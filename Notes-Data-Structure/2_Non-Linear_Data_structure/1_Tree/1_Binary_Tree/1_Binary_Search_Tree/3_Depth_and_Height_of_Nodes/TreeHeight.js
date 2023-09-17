import {Tree} from "./Tree.js";
class BSTExercise extends Tree {
  //height of the tree
  height(root) {
    if (root == null) return -1;
    if (root.leftChild == null && root.rightChild == null) return 0;
    return (
      1 + Math.max(this.height(root.leftChild), this.height(root.rightChild))
    );
  }
}

let bst = new BSTExercise();
bst.insert(7);
bst.insert(4);
bst.insert(9);
bst.insert(1);
bst.insert(6);
bst.insert(8);
bst.insert(10);

console.log(bst.height(bst.root));
