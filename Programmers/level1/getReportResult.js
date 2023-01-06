const object = []

function initObject(list) {
    for(let i = 0; i < list.length; i++) {
        object.push({
            [list[i]]: {
                    'report': [],
                    'reportNum': 0,
            }
        }) 
    }
}

function findIndex(value) {
    for(let i = 0; i < object.length; i++) {
        if(Object.keys(object[i])[0] === value)
            return i
    }
}

function solution(id_list, report, k) {
    initObject(id_list)
    let first = '' // 신고한 사람
    let second = '' // 신고 받은 사람
    let idx = -1
    const result = new Array(id_list.length)
    
    for(let i = 0; i < result.length; i++){
        result[i] = 0
    }
    
    for(let i = 0; i < report.length; i++) {
        [ first, second ] = report[i].split(' ')
        idx = findIndex(first)
        if(object[idx][[first]]['report'].includes(second)){
            continue
        } else {
            object[idx][[first]]['report'].push(second)
            idx = findIndex(second)
            object[idx][[second]]['reportNum'] += 1
        }
    }
    
    for(let i = 0; i < object.length; i++){
        if(object[i][Object.keys(object[i])[0]]['reportNum'] >= k) {
            for(let j = 0; j < object.length; j++) {
                if(object[j][Object.keys(object[j])[0]]['report'].includes(Object.keys(object[i])[0])) {
                    result[j] += 1
                }
            }
        }
    }
    return result
}