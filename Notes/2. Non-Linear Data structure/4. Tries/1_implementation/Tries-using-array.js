class Node {
  constructor(value) {
    this.value = value;
    this.children = [];
    this.isEndOfWord;
  }

  print() {
    console.log(this.value);
  }
}
const root = new Node("");

class Tries {
  insert(word) {
    let current = root;
    const wordArr = word.split("");

    for (let ch of wordArr) {
      let index = ch.charCodeAt(0) - "a".charCodeAt(0);

      if (!current.children.includes(index)) {
        current.children[index] = new Node(ch);
      }

      current = current.children[index];
    }

    current.isEndOfWord = true;
  }

  print() {
    console.log(root);
  }
}

const tries = new Tries();
tries.insert("cat");
// tries.insert("can");
tries.print();

/**
NB : A lot of memeory gets wasted as everytime we 
insert 26(in worst case) places get created but we 
are using only 1 so array is not efficient way to 
impletement heap
*/
