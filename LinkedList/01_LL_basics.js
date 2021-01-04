//defining LL

//1st way
const node = {
  data: 100,
  next: {
    data: 200,
    next: {
      data: 300,
      next: {
        data: 400,
        next: null,
      },
    },
  },
};

console.log(node);

//2nd way
const node1 = {
  data: 100,
};

const node2 = {
  data: 200,
};

node1.next = node2;
console.log(node1); //{ data: 100, next: { data: 200 } }
