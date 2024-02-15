const byteSize = (str) => new Blob([str]).size;

console.log(byteSize("hello"));
console.log(byteSize("😎"));
