# Approach :

1. Create AVLNode Class
2. Implement insert like normal BST : insert()
3. inside insert implement "Height Calculation" with help of below helper methods: setHeight()
   1. height()
   2. setHeight()
4. and also implement "Balance operation" with help of below helper methods: : balance()
   1. balanceFactor();
   2. isLeftHeavy(), isRightHeavy()
   3. leftRotate(), rightRotate()
   4. balance()

```js
class AVLNode{}
class AVLTree{
  insert(data){
    insertHelper(data, root){
      this.setHeight(root)
      this.balance(root)
    }
    this.root = insertHelper(data, root)
  }

//helper methods
//for height
  height(node){}
  setHeight(node){}

// for balancing
  balanceFactor(node){};
  isLeftHeavy(root){}; isRightHeavy(root){};
  leftRotate(root){}; rightRotate(root){};
  balance(root){};
}
```

# Approach to balance()

## check if it's a right heavy tree

```zsh
# right heavy tree example
# Eg. 1
10
  20
    30
leftRotation(10)

# Eg. 2
10
  30
20
rightRotation(30)
leftRotation(10)
```

- NB: if tree is right heavy, we have to always perform leftRotation on root node.

## check if it's a left heavy tree

```zsh
#  left heavy tree example
# Eg. 1
    30
  20
10
rightRotation(30)

# Eg. 2
  30
10
  20
leftRotation(10)
rightRotation(30)
```

- NB: if tree is left heavy, we have to always perform rightRotation on root node.
