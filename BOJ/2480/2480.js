const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
let array = input[0].split(' ').map(el => parseInt(el));

function solution() {
  array.sort();
  const result = {};
  array.forEach(x => {
    result[x] = (result[x] || 0) + 1;
  });
  
  const dice = Object.keys(result).reduce(function(a, b) {
    return result[a] > result[b] ? a : b;
  })

  if(result[dice] == 3) {
    return 10000 + dice * 1000;
  } else if(result[dice] == 2) {
    return 1000 + dice * 100;
  } else {
    return array[2] * 100;
  }
}

console.log(solution());