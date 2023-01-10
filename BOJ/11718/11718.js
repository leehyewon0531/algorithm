const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');

for(let i = 0; i < input.length; i++) {
  if(input[i].includes('\r')) {
    console.log(input[i].replace('\r', ''));
    continue;
  }
  console.log(input[i]);
}