const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const total = input[0].split(' ').map(el => parseInt(el));
const set = Math.min(...total) // set 개수

const B = input[1].split(' ').map(el => parseInt(el));
const C = input[2].split(' ').map(el => parseInt(el));
const D = input[3].split(' ').map(el => parseInt(el));

function solution() {
  let beforeDC = 0;
  let afterDC = 0;

  B.sort(function (a, b) {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });
  C.sort(function (a, b) {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });
  D.sort(function (a, b) {
    if (a > b) return -1;
    else if (b > a) return 1;
    else return 0;
  });

  beforeDC += B.reduce((acc, cur) => {
    return acc + cur;
  });
  beforeDC += C.reduce((acc, cur) => {
    return acc + cur;
  });
  beforeDC += D.reduce((acc, cur) => {
    return acc + cur;
  });

  for(let i = 0; i < B.length; i++) {
    if(i <= set - 1) {
      afterDC += B[i] * 0.9;
    } else {
      afterDC += B[i];
    }
  }

  for(let i = 0; i < C.length; i++) {
    if(i <= set - 1) {
      afterDC += C[i] * 0.9;
    } else {
      afterDC += C[i];
    }
  }

  for(let i = 0; i < D.length; i++) {
    if(i <= set - 1) {
      afterDC += D[i] * 0.9;
    } else {
      afterDC += D[i];
    }
  }

  console.log(beforeDC);
  console.log(afterDC);
}

solution();