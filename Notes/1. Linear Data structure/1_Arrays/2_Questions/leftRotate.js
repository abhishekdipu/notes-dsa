//------------------------------------------------------------------------------------
const rotateLeft = (n, arr) => {
  for (let i = 0; i < n; i++) {
    const shiftedElement = arr.shift();
    arr.push(shiftedElement);
  }
  return arr;
};
console.log(rotateLeft(2, [1, 2, 3, 4, 5])); //[ 3, 4, 5, 1, 2 ]

//------------------------------------------------------------------------------------
const rotateRight = (n, arr) => {
  for (let i = 0; i < n; i++) {
    const poppedElement = arr.pop();
    arr.unshift(poppedElement);
  }
  return arr;
};
console.log(rotateRight(2, [1, 2, 3, 4, 5])); //[ 4, 5, 1, 2, 3 ]

//------------------------------------------------------------------------------------

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

console.log(rotateLeft(2, [1, 2, 3, 4, 5])); //[ 3, 4, 5, 1, 2 ]
