class Node {
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
    const node = new Node(data, this.head); // all the existing node are present in "this.head". so put "this.head" in next
    this.head = node;
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
    /* 100, 200, 300, 400 ; and we want to insert 250 at index 2 (between 200 and 300)
    - so target is to make room for 250
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

  reverseList() {
    //100 , 200 , 300
    let prevNode = null;
    let nextNode = null;
    let current = this.head;

    while (current) {
      nextNode = current.next; // prevNode=null; current=100->200->300; nextNode = 200->300
      current.next = prevNode; // prevNode=null; current=100->null; nextNode = 200,300
      prevNode = current; // prevNode=100->null; current=100->null; nextNode = 200,300
      current = nextNode; // current=200,300
    }
    // return prevNode;
    this.head = prevNode;
  }

  //remove duplicate element
  // removeDuplicate() {
  //   let current, previous;
  //   let memo = {};
  //   current = this.head;
  //   memo[current.data] = 1;

  //   while (current.next) {
  //     previous = current;
  //     current = current.next;

  //     if (current.data in memo) {
  //       previous.next = current.next;
  //     } else {
  //       memo[current.data] = 1;
  //       // console.log(memo);
  //       current = previous.next;
  //     }
  //   }
  // }

  removeDuplicate() {
    let current = this.head;
    let previous = null;
    let memo = [];

    while (current) {
      if (!memo.includes(current.data)) {
        memo.push(current.data);
        previous = current;
      } else {
        previous.next = current.next;
      }
      current = current.next;
    }
  }
  removeDuplicate2 = () => {
    const memo = [];
    let current = this.head;
    let previousNode = null;

    while (current) {
      if (!memo.includes(current.data)) {
        memo.push(current.data);
        previousNode = current;
        current = current.next;
      } else {
        previousNode.next = current.next;
        current = current.next;
      }
    }
  };

  toArray() {
    let arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    // return arr;
    console.log(arr);
  }

  //getKthFromEnd if size if known
  // 10, 20, 30, 40, 50 ; k=1 => 50
  getKthFromEnd(k) {
    if (k <= 0 || k > this.size) return;

    let index = this.size - k;
    let current = this.head;
    // console.log(current);
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    console.log(current.data);
  }
  //getKthFromEnd if size if not known
  /*
  using 2 pointer approach
  //Eg LL= 10, 20, 30, 40, 50 ; k=3 => O/P = 30
  Final Target : "second" pointer will at end(50) and "first" pointer would at Kth position (30)
  For that : set the first and second pointer at distance of "K-1" apart
  
  Steps: 1. 
         2. 

  */
  //
  getKthFromEnd2(k) {
    // if (k <= 0 || k > this.size) return;
    if (k <= 0) return;

    let first = this.head;
    let second = this.head;
    for (let i = 0; i < k - 1; i++) {
      second = second.next;

      if (!second) return; //check for end (as size in not known)
    }

    while (second.next) {
      first = first.next;
      second = second.next;
    }
    console.log(first.data);
  }
}

const ll = new LinkedList();

ll.insertLast(100);
ll.insertLast(200);
ll.insertLast(300);
ll.insertLast(400);
ll.insertLast(400);
ll.insertLast(500);
// ll.insertLast(100);
// ll.printListData();
console.log("---------------");
ll.removeDuplicate();
ll.printListData();
