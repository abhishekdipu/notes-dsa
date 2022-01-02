import { Heap } from "./Heap.js";

class PriorityQueue extends Heap {
  heap = new Heap();
  enqueue(item) {
    this.heap.insert(item);
  }

  dequeue() {
    return this.heap.remove();
  }
}

const priorityQueue = new PriorityQueue();
priorityQueue.enqueue(10);
priorityQueue.enqueue(30);
priorityQueue.enqueue(20);
priorityQueue.print();
