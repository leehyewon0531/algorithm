function solution(price, money, count) {
  let answer = -1;
  let value = 0;
  
  for(let i = 1; i <= count; i++) {
      value += price * i;
  }
  
  const insufficient = value - money;
  
  if(insufficient > 0){
      return insufficient;
  } else {
      return 0;
  }
  
}