class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }
  push(item) {
    this.items[this.count++] = item;
  }
  pop() {
    if (this.count == 0) return undefined;
    let popedItem = this.items[this.count - 1];
    this.count--;
    return popedItem;
  }
  peek() {
    return this.items[this.count - 1];
  }
  isEmpty() {
    return this.count == 0;
  }

  print() {
    let allItems = "";
    for (let i = 0; i < this.count; i++) {
      allItems += this.items[i] + " ";
    }
    console.log(allItems);
  }
  size() {
    return this.count;
  }
  clear() {
    this.items = [];
    this.count = 0;
  }
}

let stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
// stack.print();
