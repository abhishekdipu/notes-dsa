import { Tree } from "./Tree.js";

class EqualTree extends Tree {
  equals(root1, root2) {
    // console.log(root1, root2);
    if (root1 == null && root2 == null) return true;
    if ((root1 && !root2) || (!root1 && root2)) return false;

    if (root1 !== null && root2 !== null) {
      let isNodeEqual = this.equals(root1.data, root2.data);
      let isLeftEqual = this.equals(root1.leftChild, root2.leftChild);
      let isRightEqual = this.equals(root1.rightChild, root2.rightChild);

      //this is preorder traversal (bcz NLR)
      if (isNodeEqual && isLeftEqual && isRightEqual) return true;
      return false;
    }
  }
}

let bst = new EqualTree();
bst.insert(7);
bst.insert(4);
bst.insert(9);
bst.insert(1);
bst.insert(6);
bst.insert(8);
bst.insert(10);

let bst2 = new EqualTree();
bst2.insert(7);
bst2.insert(4);
bst2.insert(9);
bst2.insert(1);
bst2.insert(6);
bst2.insert(8);
bst2.insert(10);
// bst2.insert(12);

console.log(bst.equals(bst.root, bst2.root));
// console.log(bst.equals(bst.root, null));
