const graph = {
    '1' : [{ '2': 5 }, { '3': 4 }],
    '2' : [{ '1': 5 }, { '3': 2 }, { '4': 7 }],
    '3' : [{ '1': 4 }, { '2': 2 }, { '4': 6 }, { '5': 11 }],
    '4' : [{ '2': 7 }, { '3': 6 }, { '5': 3 }, { '6': 8 }],
    '5' : [{ '3': 11 }, { '4': 3 }, { '6': 8 }],
    '6' : [{ '4': 8 }, { '5': 8 }]
}

const T = []

function solution() {
    const v = Object.keys(graph).length
    let i = '1' // 시작 정점 '1'
    T.push(i)
    let min = Number.MAX_SAFE_INTEGER
    let minVertex = 0

    while(true) {
        if(T.length === v) {
            break
        }

        for(let a = 0; a < T.length; a++) {
            for(let b = 0; b < graph[T[a]].length; b++) {
                const index = Object.keys(graph[T[a]])[b]
                const key = Object.keys(graph[T[a]][index])[0]
                const value = Object.values(graph[T[a]][index])[0]
                if((min > parseInt(value)) && (!T.includes(key))) {
                    min = parseInt(value)
                    minVertex = key
                }
            }
        }

        T.push(minVertex)
        min = Number.MAX_SAFE_INTEGER
    }

    console.log(T)
}

solution()