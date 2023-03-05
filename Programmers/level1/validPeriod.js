/* 
ex) 유효기간 1년일 때
    21.01.05에 수집되었으면 22.01.04까지 유효하고
    22.01.05부터는 정보 파기해야 함
모든 달은 "28일"까지 있다고 가정 ★

예를 들어 유효 기간이 1년이고,
데이터가 05.01에 수집되었으면,
04.28까지 유효하므로 이 점 주의 ★

파기해야 하는 개인정보 번호 "오름차순"으로 return
*/

function isValid(today, collectionDay, month) {
  const arrForValid = collectionDay.split('.').map(el => parseInt(el));
  let str = '';
  
  arrForValid[1] += month;
  
  while (arrForValid[1] > 12) {
      arrForValid[0] += 1;
      arrForValid[1] -= 12;
  }
  
  arrForValid.forEach(el => {
      if(parseInt(el) < 10) {
          str += '0' + el;
      } else {
          str += el;
      }
  })
  
  if(today >= parseInt(str)) {
      return true;
  } else {
      return false;
  }
}

function solution(today, terms, privacies) {
  const todayNum = parseInt(today.replaceAll('.', ''));
  const obj = {};
  let arrForLogic = [];
  const answer = [];
  
  terms.forEach(el => {
      arrForLogic = el.split(' ');
      obj[arrForLogic[0]] = parseInt(arrForLogic[1]);
  })
  
  privacies.forEach((el, idx) => {
      arrForLogic = el.split(' ');
      if(isValid(todayNum, arrForLogic[0], obj[arrForLogic[1]])) {
          answer.push(idx + 1);
      };
  })
  
  return answer;
}