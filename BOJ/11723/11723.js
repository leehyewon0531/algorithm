const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');

function solution() {
  let set = new Set();

  for(let i = 1; i < input.length; i++) {
    const line = input[i].split(' ');
    switch(line[0].replace(/\r/g, "")) {
      case 'add': 
        set.add(parseInt(line[1]));
        break;
      case 'remove':
        set.delete(parseInt(line[1]));
        break;
      case 'check':
        console.log(set.has(parseInt(line[1])) ? 1 : 0);
        break;
      case 'toggle': {
        let el = parseInt(line[1]);
        set.has(el) ? set.delete(el) : set.add(el);
        break;
      }
      case 'all':
        set.clear();
        for(let j = 1; j < 21; j++) {
          set.add(j);
        };
        break;
      case 'empty':
        set.clear();
        break;
      default:
        break;
    }
  }
}

solution();