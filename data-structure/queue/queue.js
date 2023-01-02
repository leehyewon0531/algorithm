class queue {
    constructor() {
        this.arr = []
        this.front = -1
        this.rear = -1
    }

    enqueue(item) {
        this.arr[++this.rear] = item
    }

    dequeue() {
        if(this.rear - this.front <= 0) return null
        const dqItem = this.arr[++this.front]
        return dqItem
    }

    peek() {
        if(this.rear - this.front <= 0) return null
        return this.arr[this.front + 1]
    }

    empty() {
        if(this.rear - this.front <= 0) return true
        else return false
    }

    size() {
        return this.rear - this.front
    }
}

let Q = new queue()
Q.enqueue(1)
Q.enqueue(2)
Q.enqueue(3)
console.log(Q.peek()) // 1
console.log(Q.size()) // 3
console.log(Q.empty()) // false
console.log(Q.dequeue()) // 1
console.log(Q.dequeue()) // 2
console.log(Q.peek()) // 3
console.log(Q.size()) // 1
console.log(Q.empty()) // false