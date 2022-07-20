# approach to check if the given binary tree is BST or not

- Rule to a binary tree to be BST : for all the **node**
  1. all the nodes in left sub-tree should be less then the **node** and
  1. all the nodes in right sub-tree should be greater then the **node**

## Approach 1 : for each node check all nodes meet BST condition.

- Time complexity : O(n^2)

## Approach 2 : Define Range for each node and check if node value in between that range.

- We are following **PreOrder Traversal** here, bcz 1st we check range of node then left then right
- Time complexity : O(n) (bcz we are visiting all the nodes only once)
- Space Complexity : O(1)

## Approach 3 :

- make InOrder traversal and if we'll get result in sorted order then it'll be BST.
- Time complexity : O(n)
- Space Complexity : O(n)
- We can optimized this approach to optimize Space Complexity to O(1)
