const input = "abacfd";

const getFirstNonRepetingChar = () => {
  const charArr = input.split("");
  const memo = [];
  const memo2 = [];
  for (let char of charArr) {
    if (!memo.includes(char) && !memo2.includes(char)) {
      memo.push(char);
      memo2.push(char);
    } else {
      memo.splice(memo.indexOf(char), 1);
    }
  }
  return memo[0];
};

console.log(getFirstNonRepetingChar());
