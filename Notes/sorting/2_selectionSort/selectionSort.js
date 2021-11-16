const selectionSort = (array) => {
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    //swap
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
};

const nums = [2, 1, 56, 999, 123, 54];

console.log(selectionSort(nums)); //[ 1, 2, 54, 56, 123, 999 ]
