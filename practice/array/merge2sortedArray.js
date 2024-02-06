/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 */

const mergeArr = (arr1, arr2) => {
  //result array[m+n]
  const mergedArr = [];
  let p1 = 0;
  let p2 = 0;
  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (p1 >= mergeArr.length) {
      mergedArr;
    }
    if (arr1[p1] <= arr2[p2]) {
      mergedArr.push(arr1[p1]);
      p1++;
    } else {
      mergedArr.push(arr2[p2]);
      p2++;
    }
  }
  return mergedArr;
};

const ans = mergeArr([1, 3, 5, 6], [2, 4, 5, 8, 9, 10]);
console.log(ans);
