class Node {
  constructor(value) {
    this.value = value;
    this.children = {};
    this.isEndOfWord;
  }

  hasChild(ch) {
    return ch in this.children;
  }
  addChild(ch) {
    this.children[ch] = new Node(ch);
  }
  getChild(ch) {
    return this.children[ch];
  }

  hasChildren() {
    return Object.keys(this.children).length !== 0;
  }
}
const root = new Node("");

class Tries {
  // constructor() {
  //   this.root = new Node("");
  // }
  insert(word) {
    let current = root;
    const wordArr = word.split("");

    for (let ch of wordArr) {
      if (!current.hasChild(ch)) {
        current.addChild(ch);
      }
      current = current.getChild(ch);
    }
    current.isEndOfWord = true;
  }

  contain(word) {
    if (!word) return false;

    let current = root;
    const wordArr = word.split("");

    for (let ch of wordArr) {
      if (!current.hasChild(ch)) {
        return false;
      }
      current = current.getChild(ch);
    }
    if (!current.isEndOfWord) return false;

    return true;
  }
  //Traversal : PreOrder, PostOrder using recurssion
  //1st node then child
  traversePreOrder() {
    const traverse = (root) => {
      console.log(root.value);

      for (let child in root.children) {
        traverse(root.getChild(child));
      }
    };
    traverse(root);
  }

  //1st child then node
  traversePostOrder() {
    const traverse = (root) => {
      for (let child in root.children) {
        traverse(root.getChild(child));
      }
      console.log(root.value);
    };
    traverse(root);
  }

  //remove
  /**
   * => to remove we do the postOrder Traversal, so
   * we go all the down till we find "r" and remove it's
   * "isEndOfWord" property. if on our way back if it doesn't
   * have children then we will remove node itself and keep
   * on doing this untill we get to a node which has children
   *
   * Eg, lets say we have 2 words in our trie car and care
   * Q1.) to Remove "car" from the trie
   *    steps 1: see if "c" is present or not then look for "a" then look for "r"
   *    step 2: now see if "r" isEndOfWord, if yes(in this case) then make it "false"
   *    step 3: see if "r" has children, if yes(in this case) then do nothing
   *
   * Q2.) to Remove "care" from the trie
   *    steps 1: see if "c" is present or not then look for "a" then look for "r" then look for "e"
   *    step 2: now see if "e" isEndOfWord, if yes(in this case) then make it "false"
   *    step 3: see if "r" has children, if no(in this case) then then remove the node "e"
   *    step 4: now see if "r" has children, if yes(in this case) then do nothing
   */

  remove(word) {
    if (!word) return;

    const removeHelper = (root, word, index) => {
      //baseCase: if we reach end of word
      if (index == word.length) {
        root.isEndOfWord = false;
        return;
      }

      let ch = word.charAt(index);
      let child = root.getChild(ch);
      if (!child) return;

      removeHelper(child, word, index + 1);

      if (!child.hasChildren() && !child.isEndOfWord) {
        this.remove(ch);
      }
    };

    removeHelper(root, word, 0);
  }

  //AUTOCOMPLETE
  /**
   * => we need to do preOrder Traversal to implement
   * autocomplete
   *
   * Example
   *    c     e
   *    a     g
   *    r     g
   *  d   e
   *      f
   *      u
   *      l
   * for I/p: car
   * O/P : car, card, care, careful
   */

  findWords(prefix) {
    let words = [];
    let lastNode = this.findLastNodeOf(prefix);
    this.findWordsHelper(lastNode, prefix, words);
    return words;
  }
  //helper methods for findWords
  findLastNodeOf(prefix) {
    if (!prefix) return;
    let current = root;
    let charArr = prefix.split("");
    for (let ch of charArr) {
      let child = current.getChild(ch);
      if (!child) return null;
      current = child;
    }
    //here it'll reprent last node of word
    return current;
  }

  findWordsHelper(root, prefix, words) {
    if (!root) return;
    if (root.isEndOfWord) {
      words.push(prefix);
    }
    for (let child in root.children) {
      this.findWordsHelper(root.getChild(child), prefix + child, words);
    }
  }

  print() {
    console.log(root);
  }
}

const tries = new Tries();
// tries.insert("cat");
// tries.insert("can");
// tries.insert("canada");
// tries.insert("car");
// tries.insert("care");
// tries.insert("caree");
// tries.print();
// console.log(tries.contain("cat"));
// console.log(tries.contain("can"));
// console.log(tries.contain(null));
// console.log(tries.contain(undefined));
// tries.traversePreOrder();
// tries.traversePostOrder();
//REMOVe
// tries.remove("car");
// tries.remove("care");
// tries.remove("ball");
// tries.remove(" ");
// tries.remove(null);

// console.log(tries.contain("car"));
// console.log(tries.contain("care"));
// tries.print();

//AUTO COMPLETE
tries.insert("car");
tries.insert("card");
tries.insert("care");
tries.insert("careful");
tries.insert("egg");
console.log(tries.findWords("car")); //[ 'car', 'card', 'care', 'careful' ]

/**
NB : A lot of memeory gets wasted as everytime we 
insert 26(in worst case) places get created but we 
are using only 1 so array is not efficient way to 
impletement heap
*/
