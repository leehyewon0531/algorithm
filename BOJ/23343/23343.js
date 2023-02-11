const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt')
              .toString()
              .trim()
              .split('\n')[0]
              .split(' ');

const result = input[0] - input[1];

if(typeof result == NaN) {
  console.log(NaN);
} else {
  console.log(result);
}