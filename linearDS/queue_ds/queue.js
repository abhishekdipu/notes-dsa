class Queue {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //enqueue() − add (store) an item to the queue.
  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  //dequeue() − remove (access) an item from the queue.
  dequeue() {
    if (this.count == 0) return undefined;
    // const deletedItem = this.items.shift();
    // this.count--;
    // return deletedItem;

    const deletedItem = this.items[0];
    for (let i = 0; i < this.count - 1; i++) {
      this.items[i] = this.items[i + 1];
    }
    this.count--;
    return deletedItem;
  }
  //peek() − Gets the element at the front of the queue without removing it.
  peek() {
    return this.items[0];
  }

  //isfull() − Checks if the queue is full.

  //isempty() − Checks if the queue is empty.
  isEmpty() {
    return this.items == 0;
  }
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }
}

const queue = new Queue();
console.log(queue.isEmpty());
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.dequeue();
console.log(queue.print());
console.log(queue.isEmpty());
