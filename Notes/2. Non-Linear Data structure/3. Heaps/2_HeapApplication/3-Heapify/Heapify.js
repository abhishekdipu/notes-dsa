/*
 * Heapify means transforming an array into heap in place
 * - every node should be greater than or equal to it's children
 * [5, 3, 8, 4 , 1, 2] =>
 */

const heapify = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    heapifyArrAt(arr, i);
  }
  return arr;
};

export const heapifyArrAt = (arr, index) => {
  let largerIndex = index;
  let leftIndex = index * 2 + 1;
  if (leftIndex < arr.length && arr[leftIndex] > arr[largerIndex]) {
    largerIndex = leftIndex;
  }

  let rightIndex = index * 2 + 2;
  if (rightIndex < arr.length && arr[rightIndex] > arr[largerIndex]) {
    largerIndex = rightIndex;
  }

  if (index == largerIndex) return;
  swap(arr, index, largerIndex);
  heapifyArrAt(arr, largerIndex);
};

const swap = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

const heapified = heapify([5, 3, 8, 4, 1, 2]);
//console.log(heapified); //[ 8, 4, 5, 3, 1, 2 ]
