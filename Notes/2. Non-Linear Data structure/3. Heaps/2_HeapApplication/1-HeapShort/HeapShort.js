/**
 * steps to implement heapshort
 * 1. insert each element of array into heap using insert method
 * 2. remove elements from heap and add to new array and return
 */

import { Heap } from "./Heap.js";

const heapShort = (arr) => {
  let heap = new Heap();

  //insert elements into heap
  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }

  //remove and save elements into shortedArr
  let shortedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    shortedArr[i] = heap.remove();
  }

  return shortedArr;
};

const shortedArr = heapShort([5, 3, 10, 1, 4, 2]);
console.log(shortedArr);
