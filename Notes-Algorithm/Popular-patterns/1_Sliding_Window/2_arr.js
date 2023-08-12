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

const longest_subString_With_k_distinct_chars = (arr, k) => {
  let window;
};

console.log(longest_subString_With_k_distinct_chars("acccpbbebi", 3)); //6
console.log(longest_subString_With_k_distinct_chars("aaaabbcccd", 1)); //4
console.log(longest_subString_With_k_distinct_chars("abcdefg", 10)); //7
