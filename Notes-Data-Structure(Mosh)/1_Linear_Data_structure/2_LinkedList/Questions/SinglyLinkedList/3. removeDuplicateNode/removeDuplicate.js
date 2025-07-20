import {LinkedList} from "../SinglyLinkedList.js";

class Question extends LinkedList {
  removeDuplicate = () => {
    const memo = [];
    let current = this.head;
    let previousNode = null;

    while (current) {
      if (!memo.includes(current.data)) {
        memo.push(current.data);
        previousNode = current;
      } else {
        previousNode.next = current.next;
      }
      current = current.next;
    }
  };
}

// Input data
const ll = new Question();
ll.insertFirst(100);
ll.insertFirst(100);
ll.insertFirst(100);
ll.insertFirst(100);
ll.insertLast(200);
ll.insertLast(300);
ll.insertLast(200);
ll.insertLast(300);
ll.insertLast(400);
ll.insertLast(100);
ll.insertLast(400);

// ll.printListData();

// //Result
ll.removeDuplicate();
ll.printListData();
