const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const N = parseInt(input[0]);

function solution() {
  for(let i = N; i > 0; i--) {
    let str = "";
    for(let j = 0; j < N - i; j++) {
      str += " ";
    }
    for(let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
  }
}

solution();