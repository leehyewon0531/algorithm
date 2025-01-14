function solution(n) {
    let count = 1; // 자기자신
    
    for(let i = 1; i < Math.ceil(n/2) + 1; i++) {
        let temp = i;
        for(let j = i + 1; j < Math.ceil(n/2) + 1; j++) {
            temp = temp + j;
            if(temp > 15) break;
            if(temp === 15) {
                count = count + 1;
                break;
            }
        }
    }
    
    return count;
}
