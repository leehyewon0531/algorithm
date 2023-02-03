const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const N = parseInt(input[0]);

let front = 0;
let between = 0;
let line = '';

for(let i = 0; i < N; i++) {
  front = N - (i + 1);
  between = i * 2 - 1;
  line = '';
  
  for(let j = 0; j < front; j++) {
    line += ' ';
  }

  line += '*';

  for(let j = 0; j < between; j++) {
    line += ' ';
  }

  if(i !== 0) line += '*';

  console.log(line);
}