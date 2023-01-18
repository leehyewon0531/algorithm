const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const arr = Array(31);

function solution() {
  for(let i = 0; i < input.length; i++) {
    let num = parseInt(input[i]);
    arr[num] = 1;
  }

  for(let j = 1; j < arr.length; j++) {
    if(arr[j] !== 1) console.log(j);
  }
}

solution();