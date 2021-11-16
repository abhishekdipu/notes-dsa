class Stack {
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
  //pop : remove elemnt from top(from last index)
  pop() {
    if (this.count == 0) return undefined;
    const popedIteam = this.items[this.count - 1];
    this.count--;
    return popedIteam;
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

  //print: get all iteams
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
console.log(stack.peek());
console.log(stack.print());
console.log(stack.size());
stack.pop();
console.log(stack.print());
console.log(stack.size());
