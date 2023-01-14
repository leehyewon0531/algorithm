const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const chess = [1, 1, 2, 2, 2, 8];
const inputChess = input[0].split(' ').map(el => parseInt(el));

function solution() {
  const temp = [];
  for(let i = 0; i < 6; i++) {
    temp.push(chess[i] - inputChess[i]);
  }

  return temp.join(" ");
}

console.log(solution());