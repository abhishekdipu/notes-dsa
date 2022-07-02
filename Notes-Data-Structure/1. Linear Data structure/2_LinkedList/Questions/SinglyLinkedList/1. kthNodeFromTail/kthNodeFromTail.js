// solution
const kthNodeFromEnd = (head, positionFromTail) => {
  let current = head;
  let memo = {};
  let count = 0;
  while (current) {
    memo[count++] = current.data;
    current = current.next;
  }
  let positionFromHead = count - 1 - positionFromTail; // count -1 bcz count would have increase to 1 more than actual bcz of count++
  return memo[positionFromHead];
};

//Input data
const head = {
  data: 1,
  next: {
    data: 2,
    next: {data: 3, next: {data: 4, next: {data: 5, next: null}}},
  },
};
const positionFromTail = 2;

//Result
const result = kthNodeFromEnd(head, positionFromTail);
console.log(result); //3
