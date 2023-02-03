const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const N = parseInt(input[0]);

let line = '';

for(let i = 0; i < N; i++) {
  line += '*';
}

for(let i = 0; i < N; i++) {
  console.log(line);
}