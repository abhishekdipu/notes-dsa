# Singly LinkedList

## Time Complexity : O()

### Lookup

1. Lookup By Value : O(n)
   Because may be the value we looking for is in last node.
2. Lookup By Index : O(n)
   Because Unlike Array LL are not stored secquensily, nodes can be anywhere in memory.

### Insert

1. Insert at the Beginning : O(1)
   Bcz we'll have the refrence to first-node(head) somewhere. so we don't have to traverse.
2. Insert at the End : O(1)
   Bcz we'll have the refrence to last-node(tail) somewhere. so we don't have to traverse.
3. Insert in the Middle : O(n)
   Bcz we'll have to traverse till that node.

### Deletion

1. Deletion from the Beginning : O(1)
   Bcz we'll have the refrence to first-node(head). we simply have to set the head to point 2nd node.
2. Deletion from the End : O(n)
   - Bcz we'll have to traverse till that node.
   - For Doubly linked List : O(1)
3. Deletion from the Middle : O(n)
   Bcz we'll have to traverse till that node.
