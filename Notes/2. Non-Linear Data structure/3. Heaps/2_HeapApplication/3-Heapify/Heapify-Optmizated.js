import { heapifyArrAt } from "./Heapify.js";

const heapify = (arr) => {
  let lastParentIndex = arr.length / 2 - 1;
  for (let i = lastParentIndex; i >= 0; i--) {
    heapifyArrAt(arr, i);
  }
  return arr;
};

const heapified = heapify([5, 3, 8, 4, 1, 2]);
console.log(heapified); //[ 8, 4, 5, 3, 1, 2 ]

//NB: in a balanced tree half of the nodes are leaf node
/**
 * for optimization
 * - we can optimize the algo by making 2 changes in for loop  :
 * 1. we don't have to heapify leaf node as they don't have children
 *    so in for loop we can just itterate till last lastParentIndex
 * 2. and we can use for loop in reverse way
 */
