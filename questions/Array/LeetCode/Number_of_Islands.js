/*
https://leetcode.com/problems/number-of-islands/
solution : https://www.youtube.com/watch?v=r260LwU67Uo


200. Number of Islands

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
*/
function numIslands(grid) {
  // itterate over each element of grid and count number of "1"
  // but in a island there can be multiple "1" so as soon as you encounter 1
  //      update all adjuct "1" to "0" recursevely

  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === '1') {
        count++;
        makeItSelftAndAjucentZero(i, j, grid);
      }
    }
  }
  return count;
}

const makeItSelftAndAjucentZero = (r, c, grid) => {
  if (grid[r] === undefined || grid[r][c] === undefined || grid[r][c] === '0') return;
  grid[r][c] = '0';
  makeItSelftAndAjucentZero(r + 1, c, grid);
  makeItSelftAndAjucentZero(r - 1, c, grid);
  makeItSelftAndAjucentZero(r, c + 1, grid);
  makeItSelftAndAjucentZero(r, c - 1, grid);
};

const input1 = [
  ['1', '1', '1', '1', '0'],
  ['1', '1', '0', '1', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '0', '0', '0'],
];

const input2 = [
  ['1', '1', '0', '0', '0'],
  ['1', '1', '0', '0', '0'],
  ['0', '0', '1', '0', '0'],
  ['0', '0', '0', '1', '1'],
];

console.log(numIslands(input1));
console.log(numIslands(input2));
