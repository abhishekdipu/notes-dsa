class AVLNode {
  constructor(data) {
    this.data = data;
    this.leftChild = null;
    this.rightChild = null;
    this.height = null;
  }
}
class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const insertHelper = (data, root) => {
      if (root == null) {
        root = new AVLNode(data);
      } else if (data < root.data) {
        root.leftChild = insertHelper(data, root.leftChild);
      } else if (data > root.data) {
        root.rightChild = insertHelper(data, root.rightChild);
      }

      this.setHeight(root);
      root = this.balance(root);
      return root;
    };

    this.root = insertHelper(data, this.root);
  }

  //helper methods
  height(node) {
    return node == null ? -1 : node.height;
  }
  balanceFactor(node) {
    return node == null
      ? 0
      : this.height(node.leftChild) - this.height(node.rightChild);
  }
  isLeftHeavy(node) {
    return this.balanceFactor(node) > 1;
  }
  isRightHeavy(node) {
    return this.balanceFactor(node) < -1;
  }

  balance(root) {
    if (this.isLeftHeavy(root)) {
      if (this.balanceFactor(root.rightChild) < 0)
        root.leftChild = this.rotateLeft(root.leftChild);
      return this.rotateRight(root);
    } else if (this.isRightHeavy(root)) {
      if (this.balanceFactor(root.rightChild) > 0)
        root.rightChild = this.rotateRight(root.leftChild);
      return this.rotateLeft(root);
    }
    return root;
  }

  rotateLeft(root) {
    let newRoot = root.rightChild;

    //rotation
    root.rightChild = newRoot.leftChild;
    newRoot.leftChild = root;

    //resetting the heights
    this.setHeight(root);
    this.setHeight(newRoot);
    return newRoot;
  }

  rotateRight(root) {
    let newRoot = root.leftChild;

    //rotation
    root.leftChild = newRoot.rightChild;
    newRoot.rightChild = root;

    //resetting the heights
    this.setHeight(root);
    this.setHeight(newRoot);
    return newRoot;
  }

  setHeight(node) {
    node.height =
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
  }

  print() {
    console.log("tree nodes :", this.root);
  }
}

let avl = new AVLTree();
// avl.insert(7);
// avl.insert(4);
// avl.insert(9);
// avl.insert(1);
// avl.insert(6);
// avl.insert(8);
// avl.insert(10);

avl.insert(10);
avl.insert(20);
avl.insert(30);

avl.print();
