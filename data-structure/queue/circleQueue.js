class circleQueue {
    constructor(size) {
        this.maxQueueSize = size;
        this.arr = []
        this.front = 0
        this.rear = 0
    }

    enqueue(item) {
        if(this.full()) {
            console.log("큐가 포화 상태라서 요소를 삽입할 수 없습니다.")
        } else {
            this.rear = (this.rear + 1) % this.maxQueueSize
            this.arr[this.rear] = item
        }
    }

    dequeue() {
        if(this.empty()) {
            console.log("큐가 비어 있습니다.")
        } else {
            this.front = (this.front + 1) % this.maxQueueSize
            return this.arr[this.front]
        }

    }

    peek() {
        if(this.empty()) {
            console.log("큐가 비어 있습니다.")
        } else {
            return this.arr[(this.front + 1) % this.maxQueueSize]
        }
    }

    empty() {
        return this.front === this.rear
    }

    full() { // 원형 큐가 포화 상태인지 확인하는 함수
        return (this.rear + 1) % this.maxQueueSize === this.front
    }

    size() { // 들어 있는 요소 개수 출력하는 함수
        return this.rear - this.front;
    }
}

let CQ = new circleQueue(4)
CQ.enqueue(1)
CQ.enqueue(2)
CQ.enqueue(3)
console.log(CQ.peek())
console.log(CQ.size()) 
console.log(CQ.empty()) 
console.log(CQ.dequeue()) 
console.log(CQ.dequeue()) 
console.log(CQ.peek()) 
console.log(CQ.size()) 
console.log(CQ.empty())