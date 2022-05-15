function solution(input) {
    const [N, K] = input
    const Arr = []
    
    for(let q = 0; q <= N; q++) {
        if(N % q === 0) {
            Arr.push(q)
        }
    }

    if(Arr.length < K) {
        console.log(0)
    } else {
        console.log(Arr[K-1])
    }
}

const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
let input
let list = [];

rl.on('line', function(line) {
    input = line
    rl.close()
}).on('close', function() {
    list = input.split(' ').map((el) => parseInt(el))
    solution(list)
    process.exit()
})