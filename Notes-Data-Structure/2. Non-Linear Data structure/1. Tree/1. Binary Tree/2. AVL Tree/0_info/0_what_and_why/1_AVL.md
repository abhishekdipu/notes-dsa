# AVL Tree(Adelson, Velsky and Landis):

- 1st self-balancing trees introduced in 1960s by Adelson, Velsky and Landis.
- AVL Trees are special kind of Binary Search Tree which has self-balancing property i.e every-time we insert or remove value the tree tree re-balances itself

## BalanceFactor

- BalanceFactor is difference between height of left and right sub-tree.
- if balance factor is less than -1 or more than 1 then tree is unbalanced tree.

```js
balanceFactor = height(L) - height(R);
balanceFactor > 1 => left heavy
balanceFactor < -1 => right heavy
```

# How AVL Tree re-balances itself ?

- AVL Trees are special type of Binary Search Tree which automatically re-balances itself every time we insert or remove nodes
- they do by insuring the difference between height of left sub-tree and right sub-tree is never more than 1.
- if difference is more than 1 then they re-balance themselves using rotation.

## Rotation

- To balance a tree we need to perform rotation

## Type of rotation : there are 4 Type of rotation :

1. left rotation (LL)
2. Right rotation (RR)
3. left-right Rotation(LR) also called double rotation
4. right-left Rotation(RL) also called double rotation

## When to use which type of rotation ?

- For right heavy tree

1. left rotation (LL)
2. right-left Rotation(RL)

- For Left heavy tree

1. Right rotation (RR)
2. left-right Rotation(LR)

## Approach to balance right heavy tree

- look of balanceFactor for it's rightChild

- if it's greater than 0 (>0) => RL Rotation

  1. perform rightRotation on rightChild
  2. perform leftRotation on root

- if it's less than 0 (< 0) => LL Rotation

  1. perform leftRotation on root

- NB: if tree is right heavy, we have to always perform leftRotation on root node.

```
# right heavy tree example
1)
10
  20
    30
leftRotation(10)

2)
10
  30
20
rightRotation(30)
leftRotation(10)
```

## Approach to balance left heavy tree

```
# left heavy tree example
1)
    30
  20
10
rightRotation(30)

2)
  30
10
  20
leftRotation(10)
rightRotation(30)
```
