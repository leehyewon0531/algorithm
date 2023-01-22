const fs = require('fs');
const numArr = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n').map(el => parseInt(el));

function solution() {
  numArr.sort();

  const sum = numArr.reduce((acc, cur) => {
    return acc + cur;
  })

  const avg = sum / numArr.length;
  const mid = numArr[Math.floor(numArr.length / 2)];

  console.log(avg);
  console.log(mid);
  
}

solution();