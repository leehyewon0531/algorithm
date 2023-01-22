const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const K = parseInt(input[0]);

function solution() {
  let arr = [];

  for(let i = 1; i < K + 1; i++) {
    let num = parseInt(input[i]);
    if(num == 0) {
      arr.pop();
    } else {
      arr.push(num);
    }
  }

  return arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0)

}

console.log(solution());