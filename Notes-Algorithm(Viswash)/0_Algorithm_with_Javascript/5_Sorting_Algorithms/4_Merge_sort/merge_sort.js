/** Time Complexity
 * Big-O : O(n log n)
 */

//part - 2
//merge two sorted array
const merge = (leftArr, rightArr) => {
  const mergedArr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] <= rightArr[0]) {
      mergedArr.push(leftArr.shift());
    } else {
      mergedArr.push(rightArr.shift());
    }
  }

  return [...mergedArr, ...leftArr, ...rightArr];
};

// part-1
const mergeSort = (array) => {
  const arr = [...array];
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.splice(midIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

console.log(mergeSort([-6, 20, 8, -2, 4])); //[ -6, -2, 4, 8, 20 ]
