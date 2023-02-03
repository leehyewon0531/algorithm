const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const N = parseInt(input[0]);

let star = 0;
let front = 0;
let line = '';

for(let i = 1; i < N + 1; i++) {
  star = i;
  front = N - star;
  line = '';

  for(let j = 0; j < front; j++) {
    line += ' ';
  }

  while(star > 0) {

    if((line.length == 0) || (line[line.length - 1] == ' ')) {
      line += '*';
      star--;
    } else {
      line += ' ';
    }
  } 

  console.log(line);
}