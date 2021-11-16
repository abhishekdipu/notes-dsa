var firstUniqChar = function (s) {
  let arr = s.split("");
  let memo = {};
  for (let i = 0; i < arr.length; i++) {
    if (!(arr[i] in memo)) {
      memo[arr[i]] = i;
    } else {
      memo[arr[i]] = -1;
    }
  }
  for (let key in memo) {
    if (memo[key] != -1) return memo[key];
  }
  return -1;
};

console.log(firstUniqChar("leetcode")); //0
console.log(firstUniqChar("loveleetcode")); //2
console.log(firstUniqChar("aabb")); //-1
