const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const numArr = input[1].split(' ').map(el => parseInt(el));
const v = parseInt(input[2]);

function solution() {
  let count = 0;

  for(let i = 0; i < numArr.length; i++) {
    if(numArr[i] == v) count++;
  }

  return count;
}

console.log(solution());