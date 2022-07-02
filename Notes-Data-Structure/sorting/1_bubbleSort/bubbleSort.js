const bubbleSort = (array) => {
  const arr = [...array];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
};

const nums = [2, 1, 56, 999, 123, 54];

console.log(bubbleSort(nums)); //[ 1, 2, 54, 56, 123, 999 ]
