/* 
Q: https://leetcode.com/problems/spiral-matrix/
sol : https://www.youtube.com/watch?v=aqVW8IuXUF0

Print a 2D matrix in spiral form

[
    [1,2,3],
    [4,5,6],
    [7,8,9]

]

Output : 1,2,3,6,9,8,7,4,5
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let columnBegin = 0;
  let columnEnd = matrix[0].length - 1;
  let rowBegin = 0;
  let rowEnd = matrix.length - 1;
  const output = [];

  // ---->
  while (columnBegin <= columnEnd && rowBegin <= rowEnd) {
    for (let i = columnBegin; i <= columnEnd; i++) {
      output.push(matrix[rowBegin][i]);
    }
    rowBegin++;

    // |
    // \/
    for (let j = rowBegin; j <= rowEnd; j++) {
      output.push(matrix[j][columnEnd]);
    }
    columnEnd--;

    // <--
    if (rowEnd >= rowBegin)
      for (let k = columnEnd; k >= columnBegin; k--) {
        output.push(matrix[rowEnd][k]);
      }
    rowEnd--;

    //^
    //\
    if (columnEnd >= columnBegin)
      for (let l = rowEnd; l >= rowBegin; l--) {
        output.push(matrix[l][columnBegin]);
      }
    columnBegin++;
  }
  return output;
};

console.log(
  spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
  ])
); //[1,2,3,4,8,12,11,10,9,5,6,7]
