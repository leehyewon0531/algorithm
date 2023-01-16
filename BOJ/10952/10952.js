const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');

function solution() {
  for(let i = 0; i < input.length - 1; i++) {
    let result = input[i].split(' ').map(el => parseInt(el));
    console.log(result[0] + result[1]);
  }  
}

solution();