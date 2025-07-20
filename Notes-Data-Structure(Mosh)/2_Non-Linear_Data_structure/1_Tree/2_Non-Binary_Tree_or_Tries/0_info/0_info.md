## Tries :

- Tries are another kind of trees but they are not binary tree
- Trie comes from name "Retrieval"
- Some other popular name for tries are : Digital tree, Radix tree, Prefix tree

## Use of Tries :

1. Autocompletion : Tries are used to implement autocompletion

## Implementaion of Tries:

- Tries can be implemented using either

1. Array : A lot of memeory gets wasted so array is not efficient way to impletement heap

2. or Hash-table (Object in case of JS)

## Operations

1. Lookup : O(L)
2. Insert : O(L)
3. Delete : O(L)
4. Traversal :
   - PreOrder : 1st node then child
     - uses : to print all the words in tries
   - PostOrder : 1st child then node
     - uses : to delete any word from tries

- where L is length of word
