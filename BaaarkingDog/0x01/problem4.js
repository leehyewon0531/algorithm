function func4(N) {
  let i = 2;
  if(N == 1) return 1;

  while(true) {
    if(i > N) return i / 2;
    i *= 2;      
  }
}

console.log(func4(5));
console.log(func4(97615282));
console.log(func4(1024));