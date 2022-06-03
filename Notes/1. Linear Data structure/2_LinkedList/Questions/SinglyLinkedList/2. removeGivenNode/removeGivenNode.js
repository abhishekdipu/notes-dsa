import {Node, LinkedList} from "../SinglyLinkedList.js";

class Question extends LinkedList {
  removeGivenNode = (value) => {
    if (this.head == null) return null;

    //put dummy node
    let node = new Node(-1);
    node.next = this.head;
    this.head = node;

    let current = this.head;
    let previousNode = null;

    while (current) {
      if (current.data === value) {
        previousNode.next = current.next;
      }
      previousNode = current;
      current = current.next;
    }

    //remove 1st dummy node
    this.head = this.head.next;
  };
}

// Input data
const ll = new Question();
ll.insertFirst(100);
ll.insertLast(200);
ll.insertLast(300);
ll.insertLast(400);

// ll.printListData();

const value = 200;

// //Result
ll.removeGivenNode(100);
ll.printListData();
