/*
Q. find all the possible way for a traveler to travel from top-left corner to bottom-right corner in grid of (m*n) 
    only allowed move is down or right
*/

//Brute Force : TC: O(2^(m+n)) && SC: O(m+n)
const gridTraveler1 = (m, n) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

//Using Memoization : TC: O(m*n) && SC: O(m+n)
const gridTraveler = (m, n, memo = {}) => {
  if (m === 0 || n === 0) return 0;
  if (m === 1 || n === 1) return 1;

  const key = "m" + "," + "n";
  if (memo[key] in memo) return memo[key];

  memo[key] = gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
  return memo[key];
};

console.log(gridTraveler(15, 15));
