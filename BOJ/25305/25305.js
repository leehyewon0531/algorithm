const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const firstLine = input[0].split(' ').map(el => parseInt(el));
const N = firstLine[0];
const k = firstLine[1];

function solution() {
  const secondLine = input[1].split(' ').map(el => parseInt(el));
  secondLine.sort((a, b) => {
    return b - a;
  });

  return secondLine[k - 1];
}

console.log(solution());