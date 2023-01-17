const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const array = Array(26);
array.fill(0);

function solution(str) {
  for(let i = 0; i < array.length; i++) {
    array[i] = str.split(String.fromCharCode(97 + i)).length - 1;
  }
}

solution(input[0]);
console.log(array.join(' '));