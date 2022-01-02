export class Heap {
  //private varibales to store items and size
  items = [];
  size = 0;

  //insert
  insert(value) {
    //store the items at last index
    this.items[this.size++] = value;

    //bubbleUp the item to it's correct position(if it's greater than it's parents)
    this.bubbleUp();
  }

  //remove method => it doesn't require parameter as we always remove the root node(which hold largest value)
  remove() {
    //store last item of heap in root node
    let rootNode = this.items[0];
    this.items[0] = this.items[--this.size];

    //bubbleDown the root node item to it's correct position(if it's less than it's children)
    this.bubbleDown();
    return rootNode;
  }

  //helper methods for remove
  leftChildIndex(index) {
    return index * 2 + 1;
  }
  rightChildIndex(index) {
    return index * 2 + 2;
  }

  leftChild(index) {
    return this.items[this.leftChildIndex(index)];
  }
  rightChild(index) {
    return this.items[this.rightChildIndex(index)];
  }
  isValidParent(index) {
    //make sure if node has childs or not
    if (!this.hasLeftChild(index)) return true;
    if (!this.hasRightChild(index))
      return this.items[index] >= this.leftChild(index);

    //if both childs are present
    return (
      this.items[index] >= this.leftChild(index) &&
      this.items[index] >= this.rightChild(index)
    );
  }
  largerChildIndex(index) {
    //make sure if node has childs or not
    if (!this.hasLeftChild(index)) return index;
    if (!this.hasRightChild(index)) return this.leftChildIndex(index);

    return this.leftChild(index) > this.rightChild(index)
      ? this.leftChildIndex(index)
      : this.rightChildIndex(index);
  }

  hasLeftChild(index) {
    return this.leftChildIndex(index) <= this.size;
  }
  hasRightChild(index) {
    return this.rightChildIndex(index) <= this.size;
  }

  bubbleDown() {
    let index = 0;
    //index > 0 => size as we are increasing the index so it should not go more than size
    while (index <= this.size && !this.isValidParent(index)) {
      let largerChildIndex = this.largerChildIndex(index);
      this.swap(index, largerChildIndex);
      index = largerChildIndex;
    }
  }

  //private helper method
  swap(first, second) {
    let temp = this.items[first];
    this.items[first] = this.items[second];
    this.items[second] = temp;
  }

  bubbleUp() {
    //if newItem > parent => bubble up the newItem
    let index = this.size - 1;
    const parentIndex = (index) => {
      return Math.floor((index - 1) / 2);
    };

    //index > 0 => bcz as we are decreasing the index it should not go less than 0
    while (index > 0 && this.items[index] > this.items[parentIndex(index)]) {
      this.swap(index, parentIndex(index));
      index = parentIndex(index);
    }
  }
  print() {
    console.log(this.items);
  }
}
