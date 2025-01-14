function solution(s) {
    let count = 0;
    let removedZero = 0;
    let target = s;
    
    while(target > 1) {
        count += 1;
        const zeroRemovedTarget = target.replaceAll('0', '');
        removedZero += target.length - zeroRemovedTarget.length;
        
        target = getBinary(zeroRemovedTarget.length);
    }
    
    return [count, removedZero];
}

function getBinary(num) {
    let solution = '';
    
    while(num > 0) {
        solution = (num % 2).toString() + solution;
        num = Math.floor(num / 2);
    }
    
    return solution;
}
