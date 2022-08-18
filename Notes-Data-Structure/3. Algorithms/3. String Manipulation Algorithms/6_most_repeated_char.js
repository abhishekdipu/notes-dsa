/*
Find the most repeated character in a string.
Input: “Hellooo!!”
Output: ‘o’
*/

const mostRepeatedChar = (str) => {
  if (!str) return null;

  const memo = {};
  for (let char of str) {
    if (!(char in memo)) {
      memo[char] = 1;
    } else {
      memo[char]++;
    }
  }

  let maxValue = 0;
  let maxKey = "";
  for (let key in memo) {
    let curr = memo[key];
    if (curr > maxValue) {
      maxValue = curr;
      maxKey = key;
    }
  }

  return maxKey;
};

console.log(mostRepeatedChar("Hellooo!!"));
console.log(mostRepeatedChar("Hellooo!!!!"));
