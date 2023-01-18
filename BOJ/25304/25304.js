const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const X = parseInt(input[0]);

function solution() {
  let total = 0;

  for(let i = 2; i < input.length; i++) {
    let result = input[i].split(' ').map(el => parseInt(el));
    total += result[0] * result[1];
  }

  return total == X ? "Yes" : "No";
}

console.log(solution());