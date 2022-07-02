/** get the 1st repeating chars
 * abac -> a
 * abcbc -> b
 * abc -> NaN
 */

//without memo: O(n^2)
const getRepeatingChar = (words) => {
  const charArr = words.split("");
  for (let i = 0; i <= charArr.length - 1; i++) {
    for (let j = i + 1; j <= charArr.length - 1; j++) {
      if (charArr[i] === charArr[j]) {
        return charArr[i];
      }
    }
  }

  return NaN;
};

//using memoization : O(n)
const getRepeatingChar3 = (words, memo = {}) => {
  const charArr = words.split("");
  for (let i = 0; i <= charArr.length - 1; i++) {
    if (charArr[i] in memo) {
      return charArr[i];
    } else memo[charArr[i]] = 1;
  }

  return NaN;
};

console.log(getRepeatingChar3("cbaba"));
