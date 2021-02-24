function rotLeft(a, d) {
  let newArr = [];
  for (let i = 0; i < a.length; i++) {
    let newIndex = i - d;
    if (newIndex < 0) newIndex = newIndex + a.length;
    newArr[newIndex] = a[i];
  }

  return newArr;
}

console.log(rotLeft([1, 2, 3, 4, 5], 4)); //[ 5, 1, 2, 3, 4 ]
