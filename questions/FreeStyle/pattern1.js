function staircase(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      if (i + j <= n) {
        str += " ";
      } else {
        str += "#";
      }
    }
    str += "\n";
  }
  console.log(str);
}

staircase(5);
