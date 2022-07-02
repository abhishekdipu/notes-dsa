const isPalindrome = (str) => {
  // Define the base-case/stopping condition
  if (str.length === 0 || str.length === 1) return true;

  // Do some work to shrink the problem space
  if (str.charAt(0) === str.charAt(str.length - 1))
    return isPalindrome(str.substring(1, str.length - 1));

  // Additional base-case to handle non-palindromes
  return false;
};

console.log(isPalindrome("racecar")); //true
console.log(isPalindrome("hello")); //false
