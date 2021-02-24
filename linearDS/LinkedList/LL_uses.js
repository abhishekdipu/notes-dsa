const LinkedList = require("./02_LL_Imp");

const ll = new LinkedList();

ll.insertFirst(200);
ll.insertFirst(100);
ll.insertLast(300);
ll.insertAt(400, 3);

ll.printListData();
console.log(ll);
