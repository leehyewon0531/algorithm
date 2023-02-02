const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n')
              .map(el => parseInt(el));

function solution() {
  let sum = input[0];

  for(let i = 1; i < input.length; i++) {
    if((100 - sum) < (sum + input[i] - 100)) {
      return sum;
    }
    sum += input[i];
  }

  return sum;
}

console.log(solution());