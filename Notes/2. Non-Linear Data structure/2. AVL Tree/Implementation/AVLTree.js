class AVLNode {
  constructor(data, leftChild = null, rightChild = null) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  insertNode(data) {
    this.root = this.insert(this.root, data);
  }
  //using recurssion
  insert(root, data) {
    //this tree is empty
    if (root == null) {
      console.log("object");
      return new AVLNode(data);
    }

    if (data < root.data) {
      root.leftChild = this.insert(root.leftChild, data);
    } else {
      root.rightChild = this.insert(root.rightChild, data);
    }
  }
}

let avl = new AVLTree();
avl.insertNode(7);
avl.insertNode(4);
avl.insertNode(9);
avl.insertNode(1);
avl.insertNode(6);
avl.insertNode(8);
avl.insertNode(10);
console.log(avl.root);
