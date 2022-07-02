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
}
