## LOGIC for removing all the nodes with given value :

- create a dummy node before the head -> new LL is formed
- check if current.next == value then current.next = nextNode.next
- return head.next (1st node is dummy one)
