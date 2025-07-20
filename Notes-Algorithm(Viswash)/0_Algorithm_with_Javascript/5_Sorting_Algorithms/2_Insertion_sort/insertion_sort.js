// Big-O = O(n^2)
const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    const numberToInsert = arr[i];
    let j = i - 1; // end of sorted array
    while (j > 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
  return arr;
};

console.log(insertionSort([-6, 20, 8, -2, 4])); //[ -6, -2, 4, 8, 20 ]
