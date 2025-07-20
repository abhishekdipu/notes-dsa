class Node {
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
}
