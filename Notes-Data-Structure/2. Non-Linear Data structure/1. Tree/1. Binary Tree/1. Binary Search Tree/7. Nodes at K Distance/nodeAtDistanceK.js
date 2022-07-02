import { Tree } from "./Tree.js";

class BSTExercise extends Tree {
  //Traversal :
  //TC :
  printNodesAtDistance(root, distance) {
    if (root == null) return;
    if (distance == 0) return console.log(root.data);

    this.printNodesAtDistance(root.leftChild, distance - 1);
    this.printNodesAtDistance(root.rightChild, distance - 1);
  }

  // getNodesAtDistance(root, distance) {
  //   let arr = [];
  //   this.nodesAtDistance(root, distance, arr);
  // }
  // nodesAtDistance(root, distance, arr = []) {
  //   if (root == null) return;
  //   if (distance == 0) {
  //     arr.push(root.data);
  //     return arr;
  //   }

  //   this.nodesAtDistance(root.leftChild, distance - 1, arr);
  //   this.nodesAtDistance(root.rightChild, distance - 1, arr);
  // }
}

let bst = new BSTExercise();
bst.insert(7);
bst.insert(4);
bst.insert(9);
bst.insert(1);
bst.insert(6);
bst.insert(8);
bst.insert(10);

bst.printNodesAtDistance(bst.root, 2);

// console.log(bst.nodesAtDistance(bst.root, 1));
