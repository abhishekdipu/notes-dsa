//Big-O : O(n^2)
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

//Big-O : O(n^2)
function bubbleSort_2nd_approach(arr, n) {
  let swapped;
  for (let i = 0; i < n - 1; i++) {
    swapped = false;
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    // IF no two elements were
    // swapped by inner loop, then break
    if (swapped == false) break;
  }
}

console.log(bubbleSort([-6, 20, 8, -2, 4])); //[ -6, -2, 4, 8, 20 ]
