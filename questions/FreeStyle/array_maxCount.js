function birthdayCakeCandles(candles) {
  // Write your code here
  let tallest = Math.max(...candles);
  let tallestCount = 0;
  for (let candel of candles) {
    if (candel === tallest) tallestCount++;
  }

  return tallestCount;
}

console.log(birthdayCakeCandles([3, 4, 5, 5, 2])); //2
