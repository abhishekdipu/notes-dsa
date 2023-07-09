function alternatingCharacters(s) {
  let minDel = 0;
  for (let i = 0; i < s.length; i++) {
    if (i + 1 < s.length && s.charAt(i) == s.charAt(i + 1)) {
      minDel++;
    }
  }
  return minDel;
}

console.log(alternatingCharacters("AAABBB")); //4
