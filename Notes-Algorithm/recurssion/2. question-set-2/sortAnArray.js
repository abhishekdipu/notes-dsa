//sort an array
const sort = (arr) => {
  if (arr.length === 1) {
    return arr;
  }
  return sort(arr.slice(0, -1));

  return sortedArr;
};

const input = [2, 5, 3, 9, 1];
const result = sort(arr);
