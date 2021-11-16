class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  /**********************************************************************************/
  //Insert first node
  /**********************************************************************************/

  insertFirst(data) {
    let node = new Node(data);
    //if empty
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } //else
    else {
      let temp = this.head;
      this.head = node;
      node.next = temp;
      temp.prev = node;
    }
    this.size++;
  }

  /**********************************************************************************/
  //Insert last node
  /**********************************************************************************/

  insertLast(data) {
    let node = new Node(data);

    //if empty, make head
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } //else
    else {
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
    }
    this.size++;
  }
  /**********************************************************************************/
  //Insert at index (extra 1 line added from SLL)
  /**********************************************************************************/

  insertAt(data, index) {
    //if index is out of range
    if (index > 0 && index > this.size) {
      return;
    }

    //if first index
    if (index === 0) {
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
    node.prev = previous;
    previous.next = node; //For DLL
    this.size++;
  }

  /**********************************************************************************/
  //Get at index (NO change from SLL)
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
  //Remove First (extra 1 line added from SLL)
  /**********************************************************************************/

  removeFirst() {
    if (this.size === 0) {
      return;
    }
    this.head = this.head.next;
    this.head.prev = null; //DLL
    this.size--;
  }

  /**********************************************************************************/
  //Remove Last (else block is changed)
  /**********************************************************************************/

  removeLast() {
    if (this.size === 0) {
      return;
    }
    if (this.size === 1) {
      this.removeFirst();
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
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
      current.prev = previous;
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
}

let dll = new DoublyLinkedList();

dll.insertLast(10);
// dll.insertFirst(5);
dll.insertLast(20);
dll.insertLast(30);
dll.insertLast(40);
// dll.insertAt(15, 2);
dll.insertLast(50);

// console.log(dll.getAt(2));

// dll.removeFirst();
// dll.removeLast();
// dll.printSize();
// dll.removeLast();
// dll.printSize();
dll.removeAt(1);
dll.printListData();
console.log(dll);
