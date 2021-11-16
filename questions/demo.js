function matchingStrings(strings, queries) {
  let countArray = [];
  for (let query of queries) {
    let count = 0;
    for (let string of strings) {
      if (query === string) count++;
      console.log({ query }, { string });
    }
    countArray.push(count);
  }

  return countArray;
}

console.log(
  matchingStrings(["aba", "baba", "aba", "xzxb"], ["aba", "xzxb", "ab"])
);
