/** Climbing staircase
Question : 
    Given a staircase of 'n' steps, count the number of distinct ways to climb to the top.
    You can either climb 1 step or 2 steps at a time.

Sample output : 
    n=1, climbingStaircase(1) = 1 => (1)
    n=2, climbingStaircase(2) = 2 => (1, 1) and (2)
    n=3, climbingStaircase(3) = 3 => (1,1,1) (1, 2) and (2, 1)
    n=4, climbingStaircase (4) = 5 => (1,1,1,1) (1,1,2) (1,2,1) (2,1,1) and (2,2)

Solution approach : 
    1. At any given time, you can climb either 1 step or 2 steps
    2. If you have to climb to step 'n', we can only climb from step 'n-1' or 'n-2' 
    3. Calculate the ways we can climb to 'n-1' and 'n-2' steps and add the two
    4. climbingStaircase(n) = climbingStaircase(n-1) + climbingStaircase(n-2)
 */

// Big-O : O(n)
const climbingStaircase = (n) => {
  //base case : we already know, for 1 stair : ways =1 , and for 2 stair ways = 2, lets use it as case base
  const noOfWays = [1, 2];
  for (let i = 2; i < n; i++) {
    noOfWays[i] = climbingStaircase(n - 1) + climbingStaircase(n - 2);
  }

  // n-1 bcz array is indexed 0 and staircase starts at step 1
  return noOfWays[n - 1];
};

const climbingStaircase_approach2 = (n) => {
  if (n <= 1) return 1;
  return climbingStaircase(n - 1) + climbingStaircase(n - 2);
};

console.log(climbingStaircase(1));
console.log(climbingStaircase(2));
console.log(climbingStaircase(3));
console.log(climbingStaircase(4));
