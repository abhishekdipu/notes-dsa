# AVL Tree(Adelson, Velsky and Landis):

- 1st self-balancing trees introduced in 1960s by Adelson, Velsky and Landis.
- AVL Trees are special kind of Binary Search Tree which has self-balancing property i.e every-time we insert or remove value the tree re-balances itself

## BalanceFactor

- BalanceFactor is difference between height of left and right sub-tree.
- if balance factor is less than -1 or more than 1 then tree is unbalanced tree.

```js
balanceFactor = height(L) - height(R);
balanceFactor > 1 => left heavy
balanceFactor < -1 => right heavy
```

# How AVL Tree re-balances itself ?

- AVL tree re-balances itself, they do by insuring the difference between height of left sub-tree and right sub-tree is never more than 1.
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
