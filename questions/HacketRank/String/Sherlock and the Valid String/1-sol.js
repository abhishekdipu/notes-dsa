function isValid(s) {
  // let s = 'abhi'
  const memo = {};
  for (let i = 0; i < s.length; i++) {
    // if (!(s.charAt(i) in memo)) {
    //   memo[s.charAt(i)] = 1;
    // } else {
    //   memo[s.charAt(i)] = memo[s.charAt(i)] + 1;
    // }
    memo[s.charAt(i)] = memo[s.charAt(i)] || 0;
    memo[s.charAt(i)]++;
  }
  console.log(memo);

  let maxAllowed = 1;
  for (let key in memo) {
    let currCount = memo[key];
    let prevCount = memo[key];
    if (Math.abs(currCount - prevCount) > 2) {
      return "NO";
    } else if (maxAllowed && Math.abs(currCount - prevCount) == 1) {
      maxAllowed--;
      prevCount = memo[key];
    } else if (Math.abs(currCount - prevCount) == 0) {
      prevCount = memo[key];
    }
  }
  return "YES";
}

console.log(isValid("aabbccdd"));
console.log(isValid("aabbccd"));
console.log(isValid("aabbcd"));
