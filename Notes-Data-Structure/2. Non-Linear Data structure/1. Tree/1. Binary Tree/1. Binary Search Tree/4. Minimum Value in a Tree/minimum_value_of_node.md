# minimum value of node

## Approach

- use recursion
- find min of leftChild, rightChild and Node
- here we use post order traversal

## Min/Max Node in Any Binary Tree

- Approach for min: Math.min( min(left), min(right), root.data)
- Approach for max: Math.max( max(left), max(right), root.data)
- Time Complexity : O(n) {bcz we have to traverse every node in order to find the min}

## Min/Max Node in Binary Search Tree

- - Approach for min: we have to find the left most node
- - Approach for max: we have to find the right most node
- Time Complexity : O(log n) {bcz we are narrowing down the search by half in each iteration}
