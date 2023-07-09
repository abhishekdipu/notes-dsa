function minimumSwaps(arr) {
  //helper function
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  //Implementation
  let swapCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      let orgIndex = arr.indexOf(i + 1);
      swap(arr, i, orgIndex);
      swapCount++;
    }
  }
  return swapCount;
}
console.log(minimumSwaps([4, 3, 1, 2])); //3
console.log(minimumSwaps([2, 3, 4, 1, 5])); //3
console.log(minimumSwaps([7, 1, 3, 2, 4, 5, 6])); //5
