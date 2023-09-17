export class Node {
  constructor(data, leftChild = null, rightChild = null) {
    this.data = data;
    this.leftChild = leftChild;
    this.rightChild = rightChild;
  }
}

export class Tree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    const insertHelper = (data, root) => {
      if (root == null) {
        root = new Node(data);
      } else if (data < root.data) {
        root.leftChild = insertHelper(data, root.leftChild);
      } else if (data > root.data) {
        root.rightChild = insertHelper(data, root.rightChild);
      }
      return root;
    };
    this.root = insertHelper(data, this.root);
  }

  find(data) {
    if (this.root == null) return false;

    let current = this.root;
    while (current !== null) {
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
}
// let bst = new Tree();
// bst.insert(7);
// bst.insert(4);
// bst.insert(9);
// bst.insert(1);
// bst.insert(6);
// bst.insert(8);
// bst.insert(10);
// bst.print();

// console.log(bst.find(17));
