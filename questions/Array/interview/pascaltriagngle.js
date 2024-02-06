// pascal triangle

const printPascal = (n) => {
  //   let outSpace1 = [];
  //   for (let k = 0; k < n; k++) {
  //     outSpace1[k] = 0;
  //   }
  console.log([1]);
  let inputArr = [1];
  for (let i = 1; i <= n; i++) {
    const column = getColumn(inputArr);
    inputArr = column;
    const spaceCount = n + 1 - column.length;

    let outSpace = [];
    for (let j = 0; j < spaceCount; j++) {
      outSpace[j] = 0;
    }

    const updatedOutArr = [...outSpace, ...column, ...outSpace];
    console.log(updatedOutArr);
  }
};

const getColumn = (arr1) => {
  if (arr1.length === 1) {
    return [1, 1];
    // console.log([1]);
  } else if (arr1.length > 1) {
    const resultArr = [];
    resultArr.push(1);
    for (let i = 0; i < arr1.length - 1; i++) {
      resultArr.push(arr1[i] + arr1[i + 1]);
    }
    resultArr.push(1);
    return resultArr;
    // console.log(resultArr);
  }
};

// console.log(getColumn([1, 4, 6, 4, 1]));
// console.log(getColumn([1, 5, 10, 10, 5, 1]));
printPascal(3);
