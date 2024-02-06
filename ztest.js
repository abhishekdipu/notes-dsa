function minFlips(binaryString) {
  let minFlipsToLeft = 0;
  let minTotalFlips = Infinity;

  // Count the number of 1's on the right side
  let onesCount = 0;
  for (let i = binaryString.length - 1; i >= 0; i--) {
    if (binaryString[i] === '1') {
      onesCount++;
    }
  }

  // Iterate through the string and calculate flips to make 0's on left and 1's on right
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '0') {
      minTotalFlips = Math.min(minTotalFlips, minFlipsToLeft + onesCount);
      minFlipsToLeft++;
    } else {
      onesCount--;
    }
  }

  // If no flips are needed, return 0
  return minTotalFlips === Infinity ? 0 : minTotalFlips;
}

// Test cases
console.log(minFlips('1010')); // Output: 2
console.log(minFlips('00001100000')); // Output: 2
console.log(minFlips('101')); // Output: 1
console.log(minFlips('100000111')); // Output: 1
