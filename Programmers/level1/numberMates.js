// 73.7점 (시간 초과...)
function solution(X, Y) {
  let arr = [];
  
  for(let i = 0; i < X.length; i++) {
      if(Y.includes(X.charAt(i))){
          arr.push(X.charAt(i));
          Y = Y.replace(X.charAt(i), "");
      }
  }
  
  if(arr.length === 0) return "-1";
  
  arr.sort(function(a, b)  {
    return b - a;
  });
  
  let answer = arr.join("");
  
  if(answer.charAt(0) === "0") {
      return "0";
  } else {
      return answer;
  }
  
}