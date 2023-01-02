class Node {
    constructor(data, idx) {
        this.data = data
        this.left = null
        this.right = null
        this.index = idx
    }
}

class CompleteBinaryTree {
    constructor() {
        this.root = null
        this.size = 0
        // this.level = 0
    }

    init() {
        constructor()
    }

    insert(value) {
        if(this.size === 0) {
            this.root = new Node(value, 0)
            // this.level += 1
        } else {
            const location = this.size
            if(location % 2 !== 0) { // location 이 홀수이면
                const newNode = new Node(value, location)
                const parent = Math.floor(this.size / 2)
                console.log(parent)
                this.search(this.root, parent).left = newNode // Cannot set properties of undefined
            } else { // location 이 짝수이면
                const newNode = new Node(value, location)
                const parent = Math.floor((this.size - 1) / 2)
                console.log(parent)
                this.search(this.root, parent).right = newNode
            }
        }
        this.size += 1
    }

    delete() {

    }

    search(node, index) {
        // preorder
        if(node.idx === index) {
            return node
        }
        if(node.left !== null) {
            this.search(node.left, index)
        }
        if(node.right !== null) {
            this.search(node.right, index)
        }
    }

    preOrder(node) {
        if(node !== null) {
            console.log(node.data+" ")
            this.preOrder(node.left)
            this.preOrder(node.right)
        }
    }
}

const CBT = new CompleteBinaryTree()
CBT.insert(0)
CBT.insert(1)
CBT.insert(2)
CBT.insert(3)
CBT.preOrder(CBT.root)