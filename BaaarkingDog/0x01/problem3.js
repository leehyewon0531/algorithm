function func3(N) {
  for(let i = 1; i < N; i++) {
    if(i * i == N) return 1;
    if(i * i > N) return 0;
  }
  return 0;
}

console.log(func3(9));
console.log(func3(693953651));
console.log(func3(756580036));