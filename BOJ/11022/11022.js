const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');

function solution() {
  for(let i = 1; i < input.length; i++) {
    let temp = input[i].split(' ').map(el => parseInt(el));
    const result = temp[0] + temp[1];
    console.log("Case #"+i+": "+temp[0]+" + "+temp[1]+" = "+result);
  }
}

solution();