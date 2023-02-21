function solution(cards1, cards2, goal) {
  let i = 0;
  
  for(const el of goal) {
      if(el == cards1[0]) {
          cards1.shift();
          continue;
      }
      if(el == cards2[0]) {
          cards2.shift();
          continue;
      }
      return 'No';
  }
  
  return 'Yes';
}