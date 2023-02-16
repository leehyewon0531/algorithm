const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
let X = input[0];

function solution() {
  let cnt = 0;

  while(true) {
    if(parseInt(X) < 10) break;

    cnt++;
    let num = 0;

    for(let i = 0; i < X.length; i++) {
      num += parseInt(X[i]);
    }

    X = num.toString();
    
  }

  console.log(cnt);

  if(parseInt(X) % 3 == 0) {
    console.log('YES');
  } else {
    console.log('NO');
  }

}

solution();