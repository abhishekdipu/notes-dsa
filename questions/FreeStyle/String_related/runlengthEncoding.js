/**
 * runlength Encoding technique is one of the old encoding techinque to encode images based on pixel counts
 * i/p: aaaabbccca
 * o/p: 4a2b3c1a
 */

let input = "aaaabbccca";
//let input = "aaaa";

const runlengthEncode = () => {
  if (input === null || input.length === 0) return "empty";

  input = input.split("");
  let output = "";

  for (let i = 0; i < input.length; i++) {
    let count = 1;
    while (i < input.length && input[i] == input[i + 1]) {
      count++;
      i++;
    }

    output = output + count + input[i];
  }
  return output;
};

console.log(runlengthEncode());
