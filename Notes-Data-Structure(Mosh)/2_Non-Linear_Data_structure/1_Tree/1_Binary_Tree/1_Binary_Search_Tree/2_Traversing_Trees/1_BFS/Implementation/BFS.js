import {Tree} from "./Tree.js";

/**
 BFS(level order traversal) is a 3 steps process
 1. create 1st helper method "height()", to get the height for BST
 2. create 2nd helper method "printNodesAtDistance()" to print all the nodes at given distance
 3. create "levelOrder()" method to iterate over the "height" and "printNodesAtDistance"
 */
class Traversal extends Tree {
  //helper method : height of the tree
  height(root) {
    if (root == null) return -1;

    if (root.leftChild == null && root.rightChild == null) return 0;
    return 1 + Math.max(this.height(root.leftChild), this.height(root.rightChild));
  }
  //helper methods : print all the nodes at given distance
  printNodesAtDistance(root, distance) {
    if (root == null) return;
    if (distance == 0) return console.log(root.data);

    this.printNodesAtDistance(root.leftChild, distance - 1);
    this.printNodesAtDistance(root.rightChild, distance - 1);
  }

  //main method
  levelOrder(root) {
    for (let i = 0; i <= this.height(root); i++) {
      this.printNodesAtDistance(root, i);
    }
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

bst.levelOrder(bst.root);
