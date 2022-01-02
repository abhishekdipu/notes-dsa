import { Heap } from "./Heap.js";

const kthLargestNode = (arr, k) => {
  const heap = new Heap();
  for (let i = 0; i < arr.length; i++) {
    heap.insert(arr[i]);
  }

  let kthNode;
  for (let i = 1; i <= k; i++) {
    kthNode = heap.remove();
  }
  return kthNode;
};

const node = kthLargestNode([5, 3, 8, 4, 1, 2], 3);
console.log(node); //4
