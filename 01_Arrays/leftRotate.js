const nums = [1, 2, 3, 4];

// console.log(nums.shift());
// console.log(nums);

//d : how much to rotate; arr : array
function rotateLeft(d, arr) {
  const size = arr.length;
  let temp = [];
  for (let i = 0; i < size; i++) {
    temp.push(arr[i]);
    if (i < d && d < size) {
      arr[i] = arr[d];
      d++;
    } else arr[i] = temp.shift();
  }
  return arr;
}

console.log(rotateLeft(2, [1, 2, 3, 4, 5]));
