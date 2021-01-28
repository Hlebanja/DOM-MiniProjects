const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let inputArr = [];
rl.on('line', line => {
  inputArr.push(line);
  console.log('hahaha ' + inputArr);
  // inputArr = inputArr.map(element => element);
  rl.close();
});
console.log('the input array is:');
console.log(inputArr);
