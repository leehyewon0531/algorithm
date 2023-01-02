const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
const [ R, C, K ] = input[0].trim().split(' ').map(el => parseInt(el))
let coordinate = []
let check = []
let TotalCount = 0

function makeCoordinate() {
    for(let i = 1; i < R + 1; i++) {
        coordinate[i-1] = new Array()
        coordinate[i-1].push(input[i].trim().split(''))
    }
} // (0,0) 의 위치 ★

function makeCheck() {
    for(let i = 0; i < R; i++) {
        check[i] = new Array()
        for(let j = 0; j < C; j++) {
            check[i].push(false)
        }
    }
}

function solution() {
    let count = 0
    // 시작점은 항상 (R-1, 0)
    // 도착점은 항상 (0, C-1)
    // T 를 만났을 때, 범위를 넘었을 때 못 가도록 검사
    let x = R - 1
    let y = 0

    path(x, y, count)
    console.log(TotalCount)
}

function path(x, y, cnt) {
    if(check[x][y] === true || cnt > K) { // 이미 방문 or K 넘어버림
        return
    }

    cnt++
    check[x][y] = true

    console.log(cnt)
    console.log(check)

    if(cnt === K && (x === 0 && y === C - 1)) {
        TotalCount++
        makeCheck()
        return
    } else {
        if(x - 1 >= 0 && coordinate[x - 1][y] !== 'T') {
            path(x - 1, y, cnt)
        }
    
        if(y - 1 >= 0 && coordinate[x][y - 1] !== 'T') {
            path(x, y - 1, cnt)
        }
    
        if(x + 1 < R && coordinate[x + 1][y] !== 'T') {
            path(x + 1, y, cnt)
        }
    
        if(y + 1 < C && coordinate[x][y + 1] !== 'T') {
            path(x, y + 1, cnt)
        }
        return
    }
}

function main() {
    makeCoordinate()
    makeCheck()
    console.log(coordinate)
    console.log(check)
    solution()
}

main()