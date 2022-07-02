class Array {
  arr = [];
  constructor(length) {
    this.length = length;
  }

  insert(item) {
    this.arr.push(item);
  }

  //insert item at given index and push other element to right
  insertAt(index, item) {
    let newArr = [];
    if (index >= 0 && index < this.arr.length) {
      newArr[index] = item;
      for (let i = 0; i < this.arr.length; i++) {
        if (i < index) {
          newArr[i] = this.arr[i];
        } else {
          newArr[i + 1] = this.arr[i];
        }
      }
    }
    this.arr = [...newArr];
  }

  delete(index) {
    this.arr.splice(index, 1);
  }

  print() {
    console.log(this.arr);
  }
}

const numbers = new Array(4);
numbers.insert(10);
numbers.insert(20);
numbers.insert(30);
numbers.insert(40);
numbers.insert(50);
numbers.print();

// numbers.delete(1);
numbers.insertAt(2, 25);
numbers.print();
