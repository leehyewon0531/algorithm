function solution(x, n) {
  let answer = [x];
  for(let i = 0; i < n - 1; i++) {
      answer.push(answer[i] + x);
  }
  return answer;
}