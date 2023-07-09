//[question](https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays)

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
    while (arr[i] !== i + 1) {
      console.log(arr);
      console.log(i, arr[i] - 1);
      swap(arr, i, arr[i] - 1);
      swapCount++;
    }
  }
  return swapCount;
}
// console.log(minimumSwaps([4, 3, 1, 2])); //3
console.log(minimumSwaps([2, 3, 4, 1, 5])); //3
