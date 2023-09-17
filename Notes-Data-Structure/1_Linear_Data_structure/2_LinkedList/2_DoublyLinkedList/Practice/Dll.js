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

  insertFirst(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.head;
      this.head = node;
      node.next = temp;
      temp.prev = node;
    }

    this.size++;
  }

  insertLast(data) {
    const node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
    }
    this.size++;
  }

  insertAt(data, index) {
    if (index < 0 || index > this.size) throw new Error("out of bound");
    const node = new Node(data);

    if (index == 0) {
      //insertFirst
      let temp = this.head;
      this.head = node;
      node.next = temp;
      temp.prev = node;
    } else if (index === this.size) {
      //insertLast
      let temp = this.tail;
      this.tail = node;
      node.prev = temp;
      temp.next = node;
    } else {
      let count = 0;
      let current = this.head;
      let previous = null;

      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }

      previous.next = node;
      node.next = current;
      current.prev = node;
      node.prev = previous;
    }
    this.size++;
  }

  getAt(index) {
    if (index < 0 || index >= this.size) return "index out of bound";
    let current = this.head;
    let count = 0;
    while (count < index) {
      current = current.next;
      count++;
    }
    console.log("data : ", current.data);
  }

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
    let count = 0;
    let previous = null;

    while (count < index) {
      previous = current;
      current = current.next;
      count++;
    }

    previous.next = current.next;
    current.next.prev = previous;
    this.size--;
  }

  printNodes() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
    console.log("size :", this.size);
  }
  printListDataFromTail() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
    console.log("size :", this.size);
  }
}

const dll = new DoublyLinkedList();
dll.insertFirst(10);
dll.insertLast(20);
dll.insertLast(30);
dll.insertLast(40);
dll.insertLast(50);
// dll.removeLast();
dll.removeAt(2);

dll.printNodes();
console.log("----------------------------");
dll.printListDataFromTail();
