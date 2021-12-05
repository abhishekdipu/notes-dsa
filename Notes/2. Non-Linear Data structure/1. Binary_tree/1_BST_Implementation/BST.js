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
}

let bst = new Tree();
bst.insert(7);
bst.insert(4);
bst.insert(9);
bst.insert(1);
bst.insert(6);
bst.insert(8);
bst.insert(10);
// bst.print();

console.log(bst.find(9));
