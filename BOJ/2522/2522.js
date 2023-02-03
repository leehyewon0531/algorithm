const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const N = parseInt(input[0]);

let star = 0;
let blank = 0;
let line = '';

for(let i = 0; i < N; i++) {
  star = i + 1;
  blank = N - star;
  line = '';

  for(let j = 0; j < blank; j++) {
    line += ' ';
  }

  for(let j = 0; j < star; j++) {
    line += '*';
  }

  console.log(line);
}

for(let i = 1; i < N; i++) {
  star = N - i;
  blank = N - star;
  line = '';

  for(let j = 0; j < blank; j++) {
    line += ' ';
  }

  for(let j = 0; j < star; j++) {
    line += '*';
  }

  console.log(line);
}