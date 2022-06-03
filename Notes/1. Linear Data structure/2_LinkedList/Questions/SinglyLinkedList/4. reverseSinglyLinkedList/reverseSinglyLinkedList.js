import {LinkedList} from "../SinglyLinkedList.js";

class Question extends LinkedList {
  reverseSinglyLinkedList = () => {
    let current = this.head;
    let previousNode = null;
    let nextNode = null;

    while (current) {
      nextNode = current.next;
      current.next = previousNode;
      previousNode = current;
      current = nextNode;
    }

    this.head = previousNode;
  };
}

// Input data
const ll = new Question();
ll.insertFirst(100);
ll.insertLast(200);
ll.insertLast(300);
ll.insertLast(400);

// ll.printListData();

// //Result
ll.reverseSinglyLinkedList();
ll.printListData();
