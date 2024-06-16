/**
 Given a string, find the length of the longest substring that contains no more than k distinct characters
    i/p: acccpbbebi, k= 3
    o/p: 6
    explanation : cccpbb has 3 district characters, and it's length = 6


Implementation : 
1. Initialize windowStart and windowEd at the Oth index
2. Add character in window to letterFrequency Tracker if it doesn't exist there already
3. Increment character frequency in letterFrequency Tracker
4. Is the number of letters in the letterFrequency Tracker greater than K?
    • If yes:
        A. Shrink window until the letters in the letterFrequency Tracker are <= k
        B. Repeat from Step 2
    • If no:
        A. Grow sliding window to next element by incrementing windowEd
        B. Capture window length in longestSubstrSoFar
        C. Repeat from Step 2
 */

// const longest_subString_With_k_distinct_chars = (arr, k) => {
//   let l = 0;
//   let r = 0;
//   let global_max = 0;

//   let window_size = 0
//   let set = new Set();
//   while (r < arr.length) {
//     console.log('start->', {char: arr[r], l, r, set: Array.from(set), global_max});
//     global_max = Math.max(global_max, r - l);
//     if (set.size < k) {
//       //   count++;
//       set.add(arr[r]);
//     } else {
//       console.log('calc', {l, r, global_max, calc: r - l, new: Math.max(global_max, r - l)});
//       //   global_max = Math.max(global_max, r - l);

//       set.delete(arr[l]);
//       //   l++;
//       //delete all the
//       do {
//         l++;
//       } while (l < arr.length && arr[l] === arr[l - 1]);
//     }

//     console.log('end->', {set: Array.from(set), global_max}, '\n');
//     r++;
//   }
//   return global_max;
// };
//  acccpbbebi, k= 3
const longest_subString_With_k_distinct_chars = (arr, k) => {
  if (!k) return 0;
  let l = 0;
  let r = 0;
  let global_max = 0;

  let window_size = 0;
  let set = new Set();
  while (r < arr.length) {
    if (set.size < k) {
      window_size++;
      set.add(arr[r]);
    } else {
      window_size++;
      set.delete(arr[l]);
      l++;
      while (arr[l] === arr[l - 1]) {
        l++;
      }
    }
    global_max = Math.max(global_max, window_size);
    r++;
  }
  return global_max;
};

console.log(longest_subString_With_k_distinct_chars('acccpbbebi', 3)); //6
// console.log(longest_subString_With_k_distinct_chars('aaaabbcccd', 1)); //4
console.log(longest_subString_With_k_distinct_chars('abcdefg', 10)); //7
