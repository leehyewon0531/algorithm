function solution(coord) {
    let biggest = 1
    for(let i = 0; i < N; i++) {        
        for(let j = 0; j < M; j++) {
            if(coord[i][j] === '#') {
                if(check(i, j) > biggest) {
                    biggest = check(i, j)
                }
            }
        }
    }
    console.log(biggest)
}

function check(a, b) {
    let count = 1

    if(a > 0 && coordinate[a - 1][b] === '#') {
        count = count + check(a - 1, b)
    }

    if(b > 0 && coordinate[a][b - 1] === '#') {
        count = count + check(a, b - 1)
    }

    if(coordinate[a + 1][b] === '#') {
        count = count + check(a + 1, b)
    }

    if(coordinate[a][b + 1] === '#') {
        count = count + check(a, b + 1)
    }

    return count
}

const fs = require('fs')
const input = fs.readFileSync('test.txt').toString().trim().split('\n')
const [ N, M, K ] = input[0].trim().split(' ').map(el => parseInt(el))
let coordinate = []

function mapSet() {
    for(let i = 0; i < N; i++) {
        const temp = []
        for(let j = 0; j < M; j++) {
            temp.push('.')
        }
        coordinate.push(temp)
    }
    
    for(let i = 1; i < input.length; i++) {
        const [ r, c ] = input[i].trim().split(' ').map(el => parseInt(el))
        coordinate[r - 1][c - 1] = '#'
    }
}

mapSet()
solution(coordinate)