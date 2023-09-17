const quickSort = (arr) => {
  if (arr.length <= 1) return arr;

  //let pivot is last element
  const pivot = arr[arr.length - 1];
  const leftArr = [];
  const rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] < pivot ? leftArr.push(arr[i]) : rightArr.push(arr[i]);
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const nums = [2, 1, 56, 999, 123, 54];

console.log(quickSort(nums)); //[ 1, 2, 54, 56, 123, 999 ]
