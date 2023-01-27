const fs = require('fs');
const input = fs
  .readFileSync('BOJ/test.txt')
  .toString()
  .trim()
  .split('\n');

const monAndDate = input[0].split(' ').map(el => parseInt(el));
const dates = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const days = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT"
}

function solution() {
    let datesNum = 0;
    const month = monAndDate[0];
    const date = monAndDate[1];

    for(let i = 1; i < month; i++) {
      datesNum += dates[i];
    }

    datesNum += date;
    
    return days[(datesNum % 7).toString()];
}

console.log(solution());
