const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const num = parseInt(input[0]); // test case 개수

function solution() {
  for(let i = 1; i <= num; i++) {
    let result = input[i].split(',').map(el => parseInt(el));
    console.log(result[0] + result[1]);
  }  
}

solution();