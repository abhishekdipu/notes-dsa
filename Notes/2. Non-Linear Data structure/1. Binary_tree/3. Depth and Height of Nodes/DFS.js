class Node {
  constructor(data, leftChild = null, rightChild = null) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const node = new Node(data);
    if (this.root == null) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (true) {
      if (data < current.data) {
        if (current.leftChild == null) {
          current.leftChild = node;
          break;
        }
        current = current.leftChild;
      } else {
        if (current.rightChild == null) {
          current.rightChild = node;
          break;
        }
        current = current.rightChild;
      }
    }
  }

  //check if node is present
  find(data) {
    if (this.root == null) return false;

    let current = this.root;

    while (current != null) {
      if (data < current.data) {
        current = current.leftChild;
      } else if (data > current.data) {
        current = current.rightChild;
      } else return true;
    }
    return false;
  }

  print() {
    console.log(this.root);
  }

  //traversal
  traversePreOrder(root) {
    if (root == null) return;
    console.log(root.data);
    this.traversePreOrder(root.leftChild);
    this.traversePreOrder(root.rightChild);
  }

  traverseInOrder(root) {
    if (root == null) return;
    this.traverseInOrder(root.leftChild);
    console.log(root.data);
    this.traverseInOrder(root.rightChild);
  }

  traversePostOrder(root) {
    if (root == null) return;
    this.traversePostOrder(root.leftChild);
    this.traversePostOrder(root.rightChild);
    console.log(root.data);
  }

  //height of the tree
  height(root) {
    if (root == null) return -1;

    if (root.leftChild == null && root.rightChild == null) return 0;
    return (
      1 + Math.max(this.height(root.leftChild), this.height(root.rightChild))
    );
  }
}

let bst = new Tree();
bst.insert(7);
bst.insert(4);
// bst.insert(9);
// bst.insert(1);
// bst.insert(6);
// bst.insert(8);
// bst.insert(10);
// bst.print();

// console.log(bst.find(9));
// console.log(bst.root);
// bst.traversePreOrder(bst.root);
// bst.traverseInOrder(bst.root);
// bst.traversePostOrder(bst.root);
console.log(bst.height(bst.root));
