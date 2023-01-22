const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const numArr = input[0].split(' ').map(el => parseInt(el));

function solution() {
  let num = 0;
  for(let i = 0; i < numArr.length; i++) {
    num += numArr[i]**2;
  }
  return num % 10;
}

console.log(solution());