import { Tree } from "./Tree.js";

class BSTExercise extends Tree {
  //Traversal : BFS (level order)

  //helper methods
  //height of the tree
  height(root) {
    if (root == null) return -1;

    if (root.leftChild == null && root.rightChild == null) return 0;
    return (
      1 + Math.max(this.height(root.leftChild), this.height(root.rightChild))
    );
  }
  //helper methods
  printNodesAtDistance(root, distance) {
    if (root == null) return;
    if (distance == 0) return console.log(root.data);

    this.printNodesAtDistance(root.leftChild, distance - 1);
    this.printNodesAtDistance(root.rightChild, distance - 1);
  }

  levelOrder(root) {
    for (let i = 0; i <= this.height(root); i++) {
      this.printNodesAtDistance(root, i);
    }
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

bst.levelOrder(bst.root);
