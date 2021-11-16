/*
  //Insert 1st node
  //Insert last node
  //Insert at index

  //Get at index

  //Remove at index
  //clear the list

  //print list data

  //indexOf
*/

export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// const n1 = new Node(100);
// console.log(n1); //Node { data: 100, next: null }

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  /**********************************************************************************/
  //Insert first node
  /**********************************************************************************/

  insertFirst(data) {
    this.head = new Node(data, this.head);
    this.size++;
  }

  /**********************************************************************************/
  //Insert last node
  /**********************************************************************************/

  insertLast(data) {
    let node = new Node(data);
    let current;

    //if empty, make head
    if (!this.head) {
      this.head = node;
    }
    //else insert data to last node
    else {
      //get the last node
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      //insert the data to last node
      current.next = node;
    }
    this.size++;
  }

  /**********************************************************************************/
  //Insert at index
  /**********************************************************************************/

  insertAt(data, index) {
    //if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    //if first index
    if (index === 0) {
      //this.head = new Node(data, this.head);
      this.insertFirst(data);
      return;
    }

    //insert node at passed index
    /* 100, 200, 300, 400 ; and we want to insert 250 at index 2
    - so target is to make room 250
    - head holds all the nodes
    - 1. make a var 'previous' to hold the node 200, 300, 400
    - 2. make another var 'current' to hold node 300, 400
    - 3. now put previous.next = node and node.next = current
    */
    const node = new Node(data); //{data:250, next:null}
    let current, previous;

    //set current to first
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current; //node before index
      current = current.next; //Node after the index
      count++;
    }

    node.next = current;

    previous.next = node;
    this.size++;
  }

  /**********************************************************************************/
  //Get at index
  /**********************************************************************************/

  getAt(index) {
    if (index < 0 || index >= this.size) {
      return "index not found";
    }
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    return current.data;
  }
  /**********************************************************************************/
  //Remove First
  /**********************************************************************************/

  removeFirst() {
    if (this.size === 0) {
      return;
    }
    this.head = this.head.next;
    this.size--;
  }
  /**********************************************************************************/
  //Remove Last
  /**********************************************************************************/

  removeLast() {
    if (this.size === 0) {
      return;
    }
    if (this.size === 1) {
      this.removeFirst();
    } else {
      let current = this.head;

      while (current.next.next) {
        current = current.next;
      }
      current.next = null;
      this.size--;
    }
  }

  /**********************************************************************************/
  //Remove at index
  /**********************************************************************************/
  removeAt(index) {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.removeFirst();
    } else if (index === this.size - 1) {
      this.removeLast();
    } else {
      /**
       * 100,200,300,400,500 (want to remove 300 at index 2)
       * - let prev = 200,300,400,500
       * curr = 300,400,500
       */
      let current = this.head;
      let previous;
      let count = 0;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
      this.size--;
    }
  }

  /**********************************************************************************/
  //clear the list
  /**********************************************************************************/

  clearList() {
    this.head = null;
    this.size = 0;
  }

  /**********************************************************************************/
  //print size
  /**********************************************************************************/
  printSize() {
    console.log("size: ", this.size);
  }

  /**********************************************************************************/
  //print list data
  /**********************************************************************************/

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  reverseList1 = (head) => {
    head = this.head;
    let previous = null;
    let current = null;

    // while (head !== null) {
    while (head !== null) {
      current = head.next;
      head.next = previous;
      previous = head;
      head = current;
    }
    return previous;
  };

  reverseList = (head) => {
    //100 ,200, 300
    head = this.head; // head = 100 ,200, 300
    let previous = null;

    // while (head !== null) {
    while (head !== null) {
      let nextNode = head.next; // nextNode = 200,300 ; 300 ; null
      head.next = previous; // head.next = null ; 100 ,200, 300 ;  200, 300
      previous = head; // previous = 100 ,200, 300 ; 200 , 300 ;  300
      head = nextNode; // head = 200,300 ; 300 ;  null
    }
    return previous;
  };

  //remove duplicate element
  removeDuplicate() {
    let current, previous;
    let memo = {};

    current = this.head;
    memo[current.data] = 1;

    while (current.next) {
      previous = current;
      current = current.next;

      console.log(previous);
      console.log(current);

      if (current.data in memo) {
        previous.next = current.next;
      } else {
        memo[current.data] = 1;
        console.log(memo);
        current = previous.next;
      }

      console.log(this.head);
    }

    // let prevoius;
    // let current;
    // let nodes = {};

    // prevoius = this.head;
    // current = prevoius.next;
    // nodes[prevoius.data] = true;

    // while (current) {
    //   let data = current.data;
    //   if (nodes[data]) {
    //     prevoius.next = current.next;
    //   } else {
    //     nodes[data] = true;
    //     prevoius = current;
    //   }
    //   current = current.next;
    // }
  }
}

module.exports = Node;
module.exports = LinkedList;

const ll = new LinkedList();

ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(300);
ll.insertLast(400);
ll.insertLast(400);
ll.printListData();
ll.removeDuplicate();
console.log("---------------");
ll.printListData();

// ll.insertFirst(200);
// ll.insertLast(300);
// ll.insertLast(400);
// ll.removeLast();
// ll.printListData();

// ll.insertFirst(100);

// ll.insertLast(300);
// ll.insertAt(400, 3);

//ll.printListData();
//ll.printSize();
// ll.removeFirst();
// ll.printSize();

// ll.printSize();

//ll.removeAt(2);
//ll.clearList();
//ll.printSize();
// ll.printListData();
// console.log(ll);

//console.log(ll.getAt(4));

/**********************************************************************************/
//function to reverse a linkedList
//100, 200, 300, 400;
/**********************************************************************************/

// function reverse(list) {
//   let currentNode, prevNode, nextNode;
//   currentNode = this.head;
// }
