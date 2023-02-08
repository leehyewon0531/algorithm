const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n').map(el => parseInt(el));

function solution() {
  let current = 0;

  for(let i = 0; i < input.length - 1; i++) {
    current = input[i];
    let divisor = [];
    let str = `${current}`;
    let divisorSum = 0;

    for(let j = 1; j < current- 1; j++) {
      if(current % j == 0) divisor.push(j);
    }

    for(let j = 0; j < divisor.length; j++) {
      divisorSum += divisor[j];
    }

    if(divisorSum == current) {
      str += ' = ';
      str += divisor.join(' + ');
    } else {
      str += ' is NOT perfect.';
    }

    console.log(str);
    
  }
}

solution();