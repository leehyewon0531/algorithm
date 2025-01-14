function solution(s){
    const arr = [];
    for(let el of s) {
        if(el === '(') arr.push(el);
        else arr.pop();
    }
    
    return arr.length === 0;
}
