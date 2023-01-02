class HashTable {
    constructor(size) {
        this.table = []
        if(size) {
            this.size = size
        } else {
            this.size = 100
        }
    }

    insert(key, value) {
        let idx = this.hash(key)

        if(this.table[idx] === undefined) {
            this.table[idx] = { key, value }
        } else { // 해시 충돌
            while(this.table[idx] !== undefined) { // 충돌이 일어나지 않을 때까지
                ++idx
                if(this.table[idx] === undefined) {
                    this.table[idx] = { key, value }
                    if(idx >= this.size) {
                        this.size = idx + 1
                    }
                    break
                }
            }
        }
    }

    delete(key) {
        let idx = this.search(key)
        this.table[idx] = undefined
    }

    search(key) {
        let idx = this.hash(key)

        if(this.table[idx] !== undefined && this.table[idx].key === key) {
            return idx
        } else { // 해당 자리에 key값이 없는 경우, 해시 충돌이 일어난 것
            while(this.table[idx] !== undefined) {
                ++idx
                if(this.table[idx].key === key) {
                    return idx
                }
            }
        }

        return null
    }

    hash(key) {
        let hash = 0
        for(let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i)
        }
        return hash % this.size
    }

    print() {
        for(let i = 0; i < this.size; i++) {
            console.log(this.table[i])
        }
    }
}

const H = new HashTable()
H.insert('abcd', 4)
H.insert('efgh', 5)
H.print()
H.delete('efgh')
H.print()
console.log(H.search('abcd'))