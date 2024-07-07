/**
 https://leetcode.com/problems/encode-and-decode-strings/description/
    271. Encode and Decode Strings

https://neetcode.io/problems/string-encode-and-decode

String Encode and Decode
Q. Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:
Input: ["neet","code","love","you"]
Output:["neet","code","love","you"]

Example 2:
Input: ["we","say",":","yes"]
Output: ["we","say",":","yes"]

// solution : https://www.youtube.com/watch?v=B1k_sxOSgv8
// steps:
*/

class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    let res = '';
    for (let i = 0; i < strs.length; i++) {
      const len = strs[i].length;
      res = res + len + '#' + strs[i];
    }
    // console.log({encode: res}); // { encode: '4#neet4#code4#love3#you' }
    return res;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const res = [];
    let i = 0;
    while (i < str.length) {
      let temp = '';
      if (typeof (str[i] === 'number') && str[i + 1] === '#') {
        const sliceStart = i + 2;
        const sliceEnd = Number(sliceStart) + Number(str[i]);
        temp = str.slice(sliceStart, sliceEnd);
        res.push(temp);
        i = sliceEnd;
        temp = '';
      }
    }
    // console.log({decode: res}); // { decode: [ 'neet', 'code', 'love', 'you' ] }
    return res;
  }
}

const sol = new Solution();
console.log(sol.encode(['neet', 'code', 'love', 'you'])); // 4#neet4#code4#love3#you
console.log(sol.decode('4#neet4#code4#love3#you')); // [ 'neet', 'code', 'love', 'you' ]
