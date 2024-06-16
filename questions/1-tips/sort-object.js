const obj = {
  a: 2,
  c: 1,
  b: 5,
  d: 10,
};

const valSorted = Object.keys(obj)
  .map((key) => [key, obj[key]]) // step 1 : convert object to map
  .sort((a, b) => a[1] - b[1]); // step 2 : then sort

console.log('based on value', valSorted); // [ [ 'c', 1 ], [ 'a', 2 ], [ 'b', 5 ], [ 'd', 10 ] ]
