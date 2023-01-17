const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const input0 = input[0].split(' ').map(el => parseInt(el));
const input1 = input[1].split(' ').map(el => parseInt(el));

function solution() {
  const N = input0[0];
  const X = input0[1];
  const result = []
  
  for(let i = 0; i < N; i++) {
    if(input1[i] < X){
      result.push(input1[i]);
    }
  }

  return result.join(" ");
}

console.log(solution());