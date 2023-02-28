const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const num = parseInt(input[0]);

function solution() {
  let str = '';

  for(let i = 1; i < num + 1; i++) {
    str = ''
    for(let j = 0; j < num; j++) {
      if(i % 2 == 0) {
        str += ' *';
      } else {
        str += '* ';
      }
    }
    console.log(str);
  }
}

solution();