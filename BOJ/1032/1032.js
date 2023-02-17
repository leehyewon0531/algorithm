const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const N = parseInt(input[0]);
let answer = input[1];

function solution() {
  if(N == 1) {
    console.log(answer);
    return;
  }

  for(let i = 2; i < input.length; i++) {
    for(let j = 0; j < answer.length; j++) {
      if(input[i].charAt(j) !== answer.charAt(j)) {
        answer = answer.substring(0, j) + '?' + answer.substring(j + 1);
      }
    }
  }
  
  answer = answer.slice(0, answer.length - 1);
  console.log(answer);
}

solution();