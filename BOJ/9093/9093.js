const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const N = parseInt(input[0]);

function solution() {
  let sentence = []
  let char = []
  let str = ''

  for(let i = 1; i < N + 1; i++) {
    sentence = input[i].split(' ');
    str = ''
    for(let j = 0; j < sentence.length; j++) {
      char = sentence[j].replace(/\r/g, '').split('');
      str += char.reverse().join('') + " ";
    }
    console.log(str);
  }

}

solution();