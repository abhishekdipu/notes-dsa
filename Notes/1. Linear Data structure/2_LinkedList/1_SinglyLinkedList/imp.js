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

  //insert first
  insertFirst(data) {
    const node = new Node(data, this.head);
    this.head = node;
    this.size++;
  }

  //insert last
  insertLast(data) {
    const node = new Node(data);

    //if empty, make head
    if (!this.head) {
      this.head = node;
    }
    //else insert data to next of last node
    else {
      while (this.head.next) {
        this.head = this.head.next;
      }
      this.head.next = node;
    }
    this.size++;
  }

  printListData() {
    // let current = this.head;

    // while (current) {
    //   console.log(current.data);
    //   current = current.next;
    // }
    while (this.head !== null) {
      console.log(this.head.data);
      this.head = this.head.next;
    }
  }
}

const ll = new LinkedList();

ll.insertFirst(200);
ll.insertFirst(300);
ll.insertLast(300);
ll.insertLast(400);
ll.insertLast(400);
ll.printListData();
