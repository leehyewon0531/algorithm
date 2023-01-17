const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
let result = input[0].split(' ').map(el => parseInt(el));
let H = result[0];
let M = result[1];
const cook = parseInt(input[1]);

function solution() {
  M += cook;
  while(M >= 60) {
    H++;
    M -= 60;
  }

  H = H % 24;
  console.log(H+" "+M);
}

solution();