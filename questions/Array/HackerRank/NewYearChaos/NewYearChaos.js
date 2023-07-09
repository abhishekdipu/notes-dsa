function minimumBribes(arr) {
  //helper function
  const swap = (arr, i, j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };

  //main implementation [2, 1, 5, 3, 4]
  let swapCount = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] !== i + 1) {
      if (i - 1 >= 0 && arr[i - 1] == i + 1) {
        swapCount++;
        swap(arr, i, i - 1);
      } else if (i - 2 >= 0 && arr[i - 2] == i + 1) {
        swapCount += 2;
        swap(arr, i - 2, i - 1);
        swap(arr, i - 1, i);
      } else {
        return console.log("Too chaotic");
      }
    }
  }
  console.log(swapCount);
}

minimumBribes([2, 1, 5, 3, 4]); //3
