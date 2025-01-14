function solution(s) {
    const arr = s.split(' ');
    arr.forEach((el, idx) => {
        el = el.toLowerCase();
        el = el.charAt(0).toUpperCase() + el.slice(1, el.length);
        arr[idx] = el;
    })
    
    return arr.join(' ');
}
