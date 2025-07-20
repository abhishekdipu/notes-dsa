# Priority Queue

- In Priority Queue data gets inserted in given priority not in order of insertion.

## Implementation

- Priority Queue can be Implemented using Array or Heap

## Time Complexity

1. Insert operation :

   - Using Array : O(n)
     => bcz to insert 1 element we may need to shift all elements to right
   - Using Heap : O(log n)
     => we use binary tree to implement this

2. Delete operation :
   - Using Array : O(1)
     => bcz to delete we just remove the last element
   - Using Heap : O(log n)
     => we use binary tree to implement this
