/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

var removeElements = function (head, val) {
  if (head === null) {
    return null;
  }

  let currentNode = new ListNode(-1);
  currentNode.next = head;
  head = currentNode;

  while (currentNode.next !== null) {
    if (currentNode.next.val === val) {
      currentNode.next = currentNode.next.next;
    } else {
      currentNode = currentNode.next;
    }
  }
  return head.next;
};

let head = {
  val: 6,
  next: {
    val: 3,
    next: {
      val: 4,
      next: {
        val: 6,
        next: {
          val: 3,
          next: {},
        },
      },
    },
  },
};

console.log(removeElements(head, 6));
