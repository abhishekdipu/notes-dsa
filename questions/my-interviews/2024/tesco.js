/**
Tesco has around 3200 stores and more than 10% of the stores have around 800 colleagues each.
In a store, a colleague can work for multiple departments.
 
 
Here are shifts of a colleague in various departments:
- In Bakery department: From 8 to 10
- In Diary department: From 14 to 19
- In Checkout department: From 10 to 12
 
 
Given the above split of shifts, provide an API/method to return the different shifts of a colleague for the day
after merging contiguous shifts.

This will be exposed to the colleague in different UI and help them plan their day accordingly.
His shift timings in this case are 8 to 12 and 14 to 19.
 
Note: No sorting of inputs allowed

i/p : [8,10],[14,19],[10-12],[12-13] 

set : [10]
map 1 : 
{
  8 : 10,
 14 : 19,
 10 : 12,
}

map 2 : 
{
  10 : 8, // 12 : 8 // 13 : 8
  19 : 14 
  
}
*/

/**
 *
 * @param {Array} arr
 */
const getShift = (arr) => {
  const memo = {};
  for (let i = 0; i < arr.length; i++) {
    const [s, e] = arr[i];
    if (!memo[s]) {
      memo[e] = s;
    } else {
      const temp = memo[s];
      delete memo[s];
      memo[e] = temp;
    }
  }

  const out = {};
  for (let key in memo) {
    const val = memo[key];
    out[val] = key;
  }
  console.log(out);
  return out;
};
getShift([
  [8, 10],
  [14, 19],
  [10, 12],
]);

getShift([
  [8, 10],
  [14, 19],
  [10, 12],
  [19, 22],
  [22, 24],
]);

getShift([]);

getShift([[8, 10]]);
getShift([[8]]);
getShift([
  [8, 10],
  [11, 13],
  [14, 18],
]);
