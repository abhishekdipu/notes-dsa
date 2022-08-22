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

  //setting height
  height(node) {
    return node == null ? -1 : node.height;
  }

  setHeight(node) {
    node.height =
      Math.max(this.height(node.leftChild), this.height(node.rightChild)) + 1;
  }

  //balancing
  balanceFactor(node) {
    if (node == null) return 0;
    return this.height(node.leftChild) - this.height(node.rightChild);
  }

  isLeftHeavy(root) {
    return this.balanceFactor(root) > 1;
  }
  isRightHeavy(root) {
    return this.balanceFactor(root) < -1;
  }

  rotateLeft(root) {
    const newRoot = root.rightChild;
    root.rightChild = newRoot.leftChild;
    newRoot.leftChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);
    return newRoot;
  }
  rotateRight(root) {
    const newRoot = root.leftChild;
    root.leftChild = newRoot.rightChild;
    newRoot.rightChild = root;

    this.setHeight(root);
    this.setHeight(newRoot);
    return newRoot;
  }

  balance(root) {
    if (this.isLeftHeavy(root)) {
      if (this.balanceFactor(root.leftChild) < 0)
        root.leftChild = this.rotateLeft(root.leftChild);
      root = this.rotateRight(root);
    } else if (this.isRightHeavy(root)) {
      if (this.balanceFactor(root.rightChild) > 0)
        root.rightChild = this.rotateRight(root.rightChild);
      root = this.rotateLeft(root);
    }

    return root;
  }

  print() {
    console.log(this.root);
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

avl.insert(20);
avl.insert(10);
avl.insert(15);
avl.print();
