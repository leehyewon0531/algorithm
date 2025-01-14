function solution(n) {
    let num = n;
    const oneCountOfN = getBinary(n).split('1').length - 1; // n의 1의 개수
    
    while (true) {
        num++;
        const oneCountOfBiggerN = getBinary(num).split('1').length - 1;
        if(oneCountOfN === oneCountOfBiggerN) break;
    }
    
    return num;
}

function getBinary(num) {
    let str = '';
    
    while(num > 1) {
        str = (num % 2).toString() + str;
        num = Math.floor(num / 2);
    }
    
    str = '1' + str;
    
    return str;
}
