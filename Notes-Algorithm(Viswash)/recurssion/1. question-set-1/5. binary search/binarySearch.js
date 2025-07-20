const binarySearch = (arr, leftIndex, rightIndex, target) => {
  if (leftIndex > rightIndex) return -1;

  let midIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (arr[midIndex] === target) return midIndex;

  if (target < arr[midIndex]) {
    return binarySearch(arr, leftIndex, midIndex - 1, target);
  }
  return binarySearch(arr, midIndex + 1, rightIndex, target);
};

const inputArr = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const inputTarget = 80;

const ans = binarySearch(inputArr, 0, 9, inputTarget);
console.log(ans);

//0,1,2,3,4,5,6,7,8,9
