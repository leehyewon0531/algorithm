const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const N = input[0].split('').map(el => parseInt(el));

function solution() {
  let arr = Array(10);
  arr.fill(0);

  N.forEach((el) => {
    if(el == 6) {
      (arr[6] > arr[9]) ? arr[9]++ : arr[6]++;
    } else if(el == 9) {
      (arr[9] > arr[6]) ? arr[6]++ : arr[9]++;
    } else {
      arr[el]++;
    }
  })

  return Math.max.apply(null, arr);
}

console.log(solution());