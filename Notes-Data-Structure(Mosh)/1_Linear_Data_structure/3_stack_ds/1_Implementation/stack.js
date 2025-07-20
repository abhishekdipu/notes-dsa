export class Stack {
  constructor() {
    this.items = [];
    this.count = 0;
  }

  //push : add element to the top(at last index)
  push(element) {
    //this.items.push(element);
    this.items[this.count] = element;
    this.count++;
  }

  //pop : remove element from top(from last index)
  pop() {
    if (this.count == 0) return undefined;
    const poppedItem = this.items[this.count - 1];
    this.items.length--; // JS way to remove last element (without using built-in pop() method)
    this.count--;
    return poppedItem;
  }

  //peek : top element to stack
  peek() {
    return this.items[this.count - 1];
  }

  //isEmpty : to check if stack is empty
  isEmpty() {
    return this.count == 0;
  }

  //clear : delete all element of stack
  clear() {
    this.items = [];
    this.count == 0;
  }

  //print: get all items
  print() {
    let str = "";
    for (let i = 0; i < this.count; i++) {
      str += this.items[i] + " ";
    }
    return str;
  }

  //size : get no of element present
  size() {
    return this.count;
  }
}

const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log("items :", stack.print());
console.log("--------------");
console.log("peek :", stack.peek());
console.log("size :", stack.size());
console.log("poped item :", stack.pop());
console.log("items :", stack.print());
console.log("size :", stack.size());
console.log("size :", stack.items);
