/** Time Complexity :
 * Big-O (worst case) : O(n^2)
 * Theta (Avg Case) : Θ(n log n)
 */

const quickSort = (arr) => {
  //base case
  if (arr.length <= 1) return arr;
  let pivot = arr.length - 1; // make last element pivot
  // iterator over each element in arr
  const leftArr = []; //if element is less then pivot put it in leftArr,
  const rightArr = []; //if greater then pivot then put it rightArr

  // last element is already declared as pivot, so don't iterate that one
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) leftArr.push(arr[i]);
    else rightArr.push(arr[i]);
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

console.log(quickSort([-6, 20, 8, -2, 4])); //[ -6, -2, 4, 8, 20 ]
