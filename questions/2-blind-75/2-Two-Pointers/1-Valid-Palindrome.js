/*
https://leetcode.com/problems/valid-palindrome/description/
125. Valid Palindrome

A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric 
characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.

 

Example 1:

Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
Example 2:

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
Example 3:

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

/**
  2 Approaches :
    1st way :  reverse the string and check
                  const strRev = str.split('').reverse().join('');
                  return str === strRev;
    2nd way : using 2 pointers
 */
const isPalindrome = (s) => {
  // sensitize the string, remove all non-alphanumeric characters
  const str = s
    .trim()
    .replace(/[^0-9a-zA-Z]/g, '')
    .toLowerCase();

  // use 2 pointers
  let l = 0;
  let r = str.length - 1;
  while (r >= l) {
    if (str[l] !== str[r]) return false;
    l++;
    r--;
  }
  return true;
};

/*
# Explanation of sensitization done as per question 
    1. .trim() :  removes any leading and trailing whitespace from the string s.
    2. .replace(/[^0-9a-zA-Z]/g, '') : replace all occurrences of non-alphanumeric characters to ''

## Explanation For Regular Expression /[^0-9a-zA-Z]/g : 
      - The forward slashes /.../ denote the start and end of the regular expression.
      - ^ inside the square brackets [] is a negation operator. It means "not".
      - 0-9 matches any digit from 0 to 9.
      - a-z matches any lowercase letter from 'a' to 'z'.
      - A-Z matches any uppercase letter from 'A' to 'Z'.
    Therefore, [^0-9a-zA-Z] matches any character that is not a digit (0-9), a lowercase letter (a-z), or an uppercase letter (A-Z).

  /g: The g flag stands for "global". It indicates that the regular expression should match all occurrences in the string, not just the first one.
*/
