class Stack {
    constructor() {
        this.arr = []
        this.index = 0
    }

    push(item) {
        this.arr[this.index++] = item
    }

    pop() {
        if(this.index <= 0) return null
        const popItem = this.arr[--this.index]
        return popItem
    }

    peek() {
        if(this.index <= 0) return null
        return this.arr[this.index - 1]
    }

    empty() {
        if(this.index <= 0) return true
        else return false
    }

    size() {
        return this.index
    }
}

let S = new Stack()
S.push(1)
S.push(2)
S.push(3)
console.log(S.peek()) // 3
console.log(S.size()) // 3
console.log(S.empty()) // false
console.log(S.pop()) // 3
console.log(S.pop()) // 2
console.log(S.peek()) // 1
console.log(S.size()) // 1
console.log(S.empty()) // false