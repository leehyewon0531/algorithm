// 시간 초과
const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const arr = input[0].split(' ').map(el => parseInt(el));

function solution() {
  let days = 0;
  const A = arr[0];
  const B = arr[1];
  let V = arr[2];

  while(V > 0) {
    days++;
    V -= A;
    if(V <= 0) break;
    V += B;
  }

  return days;
}

console.log(solution());