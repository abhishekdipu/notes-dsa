export class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

export class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }

  insertLast(data) {
    let node = new Node(data);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  printListData() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}
