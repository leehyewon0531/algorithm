const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
const T = parseInt(input[0]) // 테스트 케이스 수
const [M, N, K] = input[1].split(' ').map(el => parseInt(el))
let coordinate = []

function initCoordinate() {
    for(let i = 0; i < M; i++) {
        coordinate[i] = new Array(N)
        for(let j = 0; j < N; j++) {
            coordinate[i][j] = 0
        }
    }
}

function addCabbage() {
    for(let i = 2; i < K + 2; i++) { // 2를 변수로...
        const [X, Y] = input[i].split(' ').map(el => parseInt(el))
        coordinate[X][Y] = 1
    }
}

function solution() {
    let count = 0

    for(let i = 0; i < M; i++) {
        for(let j = 0; j < N; j++) {
            if(coordinate[i][j] === 1) {
                
            }
        }
    }

    console.log(count)
}

initCoordinate()
addCabbage()
solution()
