var firstUniqChar = function (s) {
  var map = new Map();
  for (i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], 2);
    } else {
      map.set(s[i], 1);
    }
  }

  for (i = 0; i < s.length; i++) {
    if (map.has(s[i]) && map.get(s[i]) === 1) {
      return i;
    }
  }
  return -1;
};
console.log(firstUniqChar("leetcode")); //0
console.log(firstUniqChar("loveleetcode")); //2
console.log(firstUniqChar("aabb")); //-1
