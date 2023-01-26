const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
input.pop();

function solution() {
  for(let i = 0; i < input.length; i++) {
    const original = input[i].trim();
    let result = input[i].split('');
    result.pop();
    result = result.reverse();
    const palindrome = result.join('').trim();
    console.log((original === palindrome) ? "yes" : "no");
  }
}

solution();