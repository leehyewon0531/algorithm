class Node { // 노드 객체
    constructor(value) {
        this.value = value 
        this.next = null
    }
}

class SinglyLinkedList { // 단일 연결 리스트 객체
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
    }

    append(value) { // 연결 리스트의 끝에 노드 삽입
        const newNode = new Node(value)
        if (this.head === null) {
            this.head = this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.size += 1
    }

    insert(value, index) { // 특정 위치에 노드 삽입
        if(index < 0 || index > this.size) {
            console.log("유효하지 않은 index 입니다.")
        } else {
            const newNode = new Node(value)
            let currentNode = this.head
            let prevNode

            if(index === 0){
                if(this.size === 0) {
                    this.append(value)
                } else {
                    newNode.next = this.head
                    this.head = newNode
                    this.size += 1
                }
            } else {
                let i = 0
                while(i < index) {
                    prevNode = currentNode
                    currentNode = currentNode.next
                    i++
                }
                newNode.next = currentNode
                prevNode.next = newNode
                this.size += 1
            }
        }
    }

    deleteValue(value) { // 연결 리스트에서 값을 찾아 노드 제거
        if(this.empty()) {
            console.log("연결 리스트가 비어 있습니다.")
            return
        }
        
        let currentNode = this.head
        let prevNode

        for(let i = 0; i < this.size; i++) {
            if(currentNode.value === value) {
                if(currentNode === this.head) {
                    currentNode = currentNode.next
                    this.head = currentNode
                } else if(currentNode === this.tail) {
                        prevNode.next = null
                        this.tail = prevNode
                } else {
                        prevNode.next = currentNode.next
                        currentNode = currentNode.next
                }
                this.size -= 1
            } else {
                prevNode = currentNode
                currentNode = currentNode.next
            }
        }

    }

    deleteIndex(index) { // 연결 리스트에서 인덱스를 찾아 노드 제거
        if(this.empty()) {
            console.log("연결 리스트가 비어 있습니다.")
            return
        }

        if(index < 0 || index > this.size) {
            console.log("유효하지 않은 index 입니다.")
        } else {
            let currentNode = this.head
            let prevNode

            let i = 0
            while(i < index && currentNode !== this.tail) {
                prevNode = currentNode
                currentNode = currentNode.next
                i++
            }
            
            if(currentNode === this.head) {
                currentNode = currentNode.next
                this.head = currentNode
            } else if (currentNode === this.tail) {
                prevNode.next = null
                this.tail = prevNode
            } else {
                prevNode.next = currentNode.next
                currentNode = currentNode.next
            }
            
            this.size -= 1
        }
    }

    search(value) { // 값으로 노드 탐색
        if(this.empty()) {
            console.log("연결 리스트가 비어 있습니다.")
            return
        }

        let currentNode = this.head

        for(let i = 0; i < this.size; i++) {
            if(currentNode.value === value) {
                console.log("찾으시는 value 값은 "+i+"번째 인덱스에 있습니다.")
                if(currentNode.next !== null) {
                    currentNode = currentNode.next
                }
            } else {
                if(currentNode.next !== null) {
                    currentNode = currentNode.next
                }
            }
        }
    }

    empty() {
        return this.size === 0
    }

    printAll() { // 모든 노드 출력
        let currentNode = this.head
        for(let i = 0; i < this.size; i++) {
            console.log(i+"번째 : "+currentNode.value)
            if(currentNode.next !== null) {
                currentNode = currentNode.next
            }
        }
    }
}

const SLL = new SinglyLinkedList()
SLL.append(1)
SLL.append(2)
SLL.append(3)
SLL.append(4)
SLL.append(2)
SLL.append(5)

SLL.printAll()
SLL.insert(5, 4)
SLL.printAll()