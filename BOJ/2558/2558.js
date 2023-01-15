const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
console.log(parseInt(input[0]) + parseInt(input[1]));