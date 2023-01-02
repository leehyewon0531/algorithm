const INF = Infinity
const P = [
    [0, 10, 30, 15, INF, INF], // A
    [10, 0, INF, INF, 20, INF], // B
    [30, INF, 0, 5, INF, 5], // C
    [15, INF, 5, 0, INF, 20], // D
    [INF, 20, INF, INF, 0, 20], // E
    [INF, INF, 5, 20, 20, 0] // F
]
const S = []
const Q = ['A', 'B', 'C', 'D', 'E', 'F']

function getMin(arr) {
    let min = INF
    let idx = -1
    for(let i = 0; i < arr.length; i++) {
        if((min > arr[i]) && (arr[i] !== 0)) {
            min = arr[i]
            idx = i
        }
    }
    return idx
}

function dijkstra() {
    let d = [0, INF, INF, INF, INF, INF] // 시작점은 A
    let i = 0
    while(!(Q.length === 0)) {
        const visitedNode = Q.splice(i, 1)
        S.push(visitedNode[0])
        for(let j = 0; j < P[i].length; j++) {
            if(d[i] + P[i][j] < d[j]) {
                d[j] = d[i] + P[i][j]
                console.log(d[j])
            }
        }
        i = getMin(d)
    }
    console.log(S)
}

dijkstra()