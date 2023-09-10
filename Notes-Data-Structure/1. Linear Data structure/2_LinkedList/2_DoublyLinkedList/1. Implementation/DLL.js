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

    //if empty, make head and tail
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
    if (index < 0 || index > this.size) throw new Error("out of bound");
    const node = new Node(data);

    if (index == 0) {
      //insertFirst()
      let temp = this.head;
      this.head = node;
      node.next = temp;
      temp.prev = node;
    } else if (index === this.size) {
      //insertLast()
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
    } else {
      let current = this.head;
      let previous = null;

      // let count = 0;
      // while (count < index) {
      //   previous = current;
      //   current = current.next;
      //   count++;
      // }
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }

      previous.next = node;
      node.next = current;
      current.prev = node;
      node.prev = previous;
    }
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
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  /**********************************************************************************/
  //Remove First (extra 1 line added from SLL)
  /**********************************************************************************/

  removeFirst() {
    if (!this.head) return null;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }
    this.size--;
  }
  /**********************************************************************************/
  //Remove Last (else block is changed)
  /**********************************************************************************/

  removeLast() {
    if (!this.head) return null;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    this.size--;
  }

  /**********************************************************************************/
  //Remove at index
  /**********************************************************************************/

  removeAt(index) {
    if (index < 0 || index >= this.size) return null;
    if (index === 0) {
      this.removeFirst();
      return;
    } else if (index === this.size - 1) {
      this.removeLast();
      return;
    }
    let current = this.head;
    let previous = null;

    // while (count < index) {
    //   previous = current;
    //   current = current.next;
    //   count++;
    // }
    for (let i = 0; i < index; i++) {
      previous = current;
      current = current.next;
    }

    previous.next = current.next;
    current.next.prev = previous;
    this.size--;
  }

  /**********************************************************************************/
  //clear the list
  /**********************************************************************************/

  clearList() {
    this.head = null;
    this.tail = null;
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

  printListDataFromTail() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}

let dll = new DoublyLinkedList();

dll.insertFirst(10);
dll.insertLast(20);
dll.insertLast(30);
dll.insertLast(40);
dll.insertLast(50);

// dll.removeFirst();
// dll.getAt(2);
dll.printListData();
console.log("----------------------------");
dll.removeAt1(5);
dll.printListData();
// dll.printListDataFromTail();
