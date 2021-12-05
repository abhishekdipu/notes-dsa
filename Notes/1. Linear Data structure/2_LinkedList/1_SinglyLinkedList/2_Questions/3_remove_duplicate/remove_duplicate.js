LinkedList.prototype.removeDuplicates = function () {
  // Empty or a single element Linked List
  if (!this.head || !this.head.next) {
    console.log(
      "No duplicates were found. Empty or a single element Linked List."
    );
    return;
  }

  var p1;
  var p2;
  var nodes = {};

  p1 = this.head;
  p2 = p1.next;
  nodes[p1.data] = true;

  while (p2) {
    var data = p2.data;
    if (nodes[data]) {
      p1.next = p2.next;
    } else {
      nodes[data] = true;
      p1 = p2;
    }
    p2 = p2.next;
  }
};
