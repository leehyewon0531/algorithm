function solution(N, stages) {
  let arriveNum = 0 // 분모
  let clearNum = 0 // 분자
  let failureRate = new Array(N)
  let result = new Array() // 일단 1, 2, 3... 으로 초기화?
  
  for(let i = 0; i < N; i++) {
      stages.forEach((el) => {
          if(i + 1 <= el) {
              if(i + 1 < el) {
                  arriveNum += 1
                  clearNum += 1
              } else {
                  arriveNum += 1
              }
          }
      })
      if(arriveNum === 0) {
          failureRate[i] = 0
      } else {
          failureRate[i] = (arriveNum - clearNum) / arriveNum
      }
      arriveNum = clearNum = 0
  }
  
  let max = -1 // 실패율은 0 ~ 1
  let maxIdx = -1
  while(result.length < N) {
      for(let i = 0; i < failureRate.length; i++) {
          if(max < failureRate[i]) {
              max = failureRate[i]
              maxIdx = i
          }
      }
      result.push(maxIdx + 1)
      failureRate[maxIdx] = -1
      max = -1
      maxIdx = -1
  }
  return result
}