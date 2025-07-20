import {Stack} from "../../3_stack_ds/1_Implementation/stack.js";

class QueueWithTwoStacks {
  // let stack1 = new Stack();
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
