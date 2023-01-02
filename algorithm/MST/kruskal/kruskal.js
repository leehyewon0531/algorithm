const graph = {
    'a' : [ { 'b' : 1 }, { 'd' : 2 } ],
    'b' : [ { 'a' : 1 }, { 'c' : 3 }, { 'd' : 2 } ],
    'c' : [ { 'b' : 3 }, { 'd' : 4 } ],
    'd' : [ { 'a' : 2 }, { 'b' : 2 }, { 'c' : 4 } ]
}

const edges = [
    { v1: 'a', v2: 'b', w: 1 },
    { v1: 'a', v2: 'd', w: 2 },
    { v1: 'b', v2: 'd', w: 2 },
    { v1: 'b', v2: 'c', w: 3 },
    { v1: 'c', v2: 'd', w: 4 },
]

const parent = {
    'a' : 'a',
    'b' : 'b',
    'c' : 'c',
    'd' : 'd'
}

function solution() {
    const v = Object.keys(graph).length // 정점의 개수
    let e = 0 // 선택된 간선의 개수
    let i = 0
    let firstVertex = ''
    let secondVertex = ''

    while(true) {
        if(e === v-1) {
            break
        }

        if(parent[edges[i].v1] !== parent[edges[i].v2]) {
            firstVertex = edges[i].v1
            secondVertex = edges[i].v2

            console.log(firstVertex+"-"+secondVertex+" edge is chosen.")

            e++
            parent[edges[i].v2] = edges[i].v1
        } 

        i++
    }

}

solution()