const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const result = input[0].split(' ').map(el => parseInt(el));
console.log(result[0] - result[1]);