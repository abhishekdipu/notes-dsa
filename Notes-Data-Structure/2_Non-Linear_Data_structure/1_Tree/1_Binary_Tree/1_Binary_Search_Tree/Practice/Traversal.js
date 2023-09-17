import {Tree} from "./bst.js";

class Traversal extends Tree {
  //level order traversal
  //1. height

  height(root) {
    if (root == null) return -1;
    if (root.leftChild == null && root.rightChild == null) return 0;

    return (
      1 + Math.max(this.height(root.leftChild), this.height(root.rightChild))
    );
  }
  //2. printNodesAtDistance
  printNodesAtDistance(root, distance) {
    if (root == null) return;
    if (distance == 0) return console.log(root.data);

    this.printNodesAtDistance(root.leftChild, distance - 1);
    this.printNodesAtDistance(root.rightChild, distance - 1);
  }

  //3. leverOrder
  levelOrder(root) {
    for (let i = 0; i <= this.height(root); i++) {
      this.printNodesAtDistance(root, i);
    }
  }
}

const bst = new Traversal();
bst.insert(7);
bst.insert(4);
bst.insert(10);
bst.insert(3);
bst.insert(5);
bst.insert(9);
bst.insert(11);

bst.levelOrder(bst.root);
