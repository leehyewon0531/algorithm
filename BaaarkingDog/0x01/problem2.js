function func2(arr, N) {
  for(let i = 0; i < N; i++) {
    for(let j = i+1; j < N; j++) {
      if(arr[i] + arr[j] == 100) return 1;
    }
  }
  return 0;
}

console.log(func2([1, 52, 48], 3));
console.log(func2([50, 42], 2));
console.log(func2([4, 13, 63, 87], 4));