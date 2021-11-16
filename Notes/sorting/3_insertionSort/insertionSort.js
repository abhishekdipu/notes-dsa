const insertionSort = (array) => {
  const arr = [...array];

  for (let i = 1; i < arr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else break;
    }
  }

  return arr;
};

const nums = [2, 1, 56, 999, 23, 4];

console.log(insertionSort(nums)); //[ 1, 2, 54, 56, 123, 999 ]
