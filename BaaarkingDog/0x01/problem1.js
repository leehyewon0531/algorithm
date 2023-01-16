function func1(N) {
  let result = 0;

  for(let i = 1; i <= N; i++) {
    if(i % 3 == 0 || i % 5 == 0){
      result += i;
    }
  }

  return result;

}

console.log(func1(16));
console.log(func1(34567));
console.log(func1(27639));