function checkAscending(scale) {
  for(let i = 1; i <= 8; i++) {
    if(scale[i-1] !== i) {
      return 'mixed';
    }
  }
  return 'ascending';
}

function checkDescending(scale) {
  for(let i = 8; i >= 1; i--) {
    if(scale[8-i] !== i) {
      return 'mixed';
    }
  }
  return 'descending';
}

function solution(scale) {
  if(scale[0] === 1){
    return checkAscending(scale);
  } else if(scale[0] === 8) {
    return checkDescending(scale);
  } else {
    return 'mixed';
  }
}

const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const scale = input[0].split(' ').map(el => parseInt(el));
console.log(solution(scale));