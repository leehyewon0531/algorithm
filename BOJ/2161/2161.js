const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const num = parseInt(input[0]);
const array = Array.from({length: num}, (v, i) => i + 1);

function solution() {
  let i = 1;
  let el = 0;
  let str = '';
  while(array.length > 0) {
    if(i % 2 == 0) { // 짝수 차례
      el = array.shift();
      array.push(el);
    } else { // 홀수 차례
      el = array.shift();
      str += `${el} `;
    }
    i++;
  }

  console.log(str);
}

solution();