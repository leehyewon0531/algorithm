// 40점...

const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const result = input[0].split(' ').map(el => parseInt(el));

console.log(Number(BigInt(result[0]) + BigInt(result[1])));