//merge 2 sorted array
const merge = (leftArr, rightArr) => {
  const mergedArr = [];
  let leftArrIndex = 0;
  let rightArrIndex = 0;

  while (leftArrIndex < leftArr.length && rightArrIndex < rightArr.length) {
    const leftElm = leftArr[leftArrIndex];
    const rightElm = rightArr[rightArrIndex];
    if (leftElm < rightElm) {
      mergedArr.push(leftElm);
      leftArrIndex++;
    } else {
      mergedArr.push(rightElm);
      rightArrIndex++;
    }
  }

  return [
    ...mergedArr,
    ...leftArr.slice(leftArrIndex),
    ...rightArr.slice(rightArrIndex),
  ];
};

//console.log(merge([2, 5, 7], [3, 12, 22]));

const mergeSort = (array) => {
  const arr = [...array];
  if (arr.length <= 1) return arr;

  const midIndex = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midIndex);
  const rightArr = arr.splice(midIndex);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
};

const nums = [2, 1, 56, 999, 123, 54];

console.log(mergeSort(nums)); //[ 1, 2, 54, 56, 123, 999 ]
