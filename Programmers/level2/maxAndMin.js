function solution(s) {
    const arr = s.split(' ').map((el) => (el = Number(el)));
    arr.sort((a, b) => a - b); // ⭐
    return arr[0] + " " + arr[arr.length - 1];
}
