class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  //INSERT
  insertFirst(data) {
    let node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }

  insertLast(data) {
    let node = new Node(data);
    if (this.size < 1) {
      this.head = new Node(data, this.head);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  insertAt(data, index) {
    let node = new Node(data);
    if (index < 0 || index >= this.size) return;

    let current = this.head;
    let previous;
    let count = 0;
    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = node;
    node.next = current;
    this.size++;
  }

  //remove

  removeFirst() {
    if (this.size == 0) return;
    this.head = this.head.next;
    this.size--;
  }
  removeLast() {
    if (this.size == 0) return;
    let current = this.head;

    while (current.next.next) {
      current = current.next;
    }
    current.next = null;
    this.size--;
  }
  removeAt(index) {
    if (index < 0 || index > this.size) return;

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

  //Helper-View
  printListData() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
  getSize() {
    console.log(this.size);
  }
  clearList() {
    this.head = null;
    this.size = 0;
  }
}

const ll = new LinkedList();
ll.insertFirst(10);
ll.insertLast(20);
ll.insertLast(30);
ll.insertAt(25, 2);

// ll.removeFirst();
// ll.removeLast();
ll.removeAt(2);
ll.clearList();

ll.printListData();
ll.getSize();
