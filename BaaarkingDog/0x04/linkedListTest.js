// 이중 연결 리스트

class Node {
  constructor(data) {
    this.dat = data;
    this.pre = null;
    this.nxt = null;
  }
}

class LinkedList {
  constructor() {
    this.head = new Node(null);
    this.size = 0; // head는 size 에 넣지 X
  }

  traverse() {
    if(this.empty()) return "Linked list is empty."

    let current = this.head;
    let i = 1;

    while(current.nxt !== null) {
      console.log(i+"번째 원소 : "+current.dat);
      current = current.nxt;
      i++;
    }

  }

  insert(idx, data) {
    if(idx > this.size + 1) return "The index is invalid.";

    let current = this.head;
    let i = 1;

    while(current.nxt !== null) {
      // 위치 찾는 코드
    }

    const node = new Node(data); // 삽입할 노드
    node.pre = current.pre;
    node.nxt = current;
    current.pre.nxt = node;
    current.pre = node;
    
    this.size++;

    return "Insertion is complete."
  }

  erase(idx) {
    if(idx > this.size + 1) return "The index is invalid.";

    let current = this.head;
    let i = 1;

    while(current.nxt !== null) {
      // 위치 찾는 코드
    }

    current.pre.nxt = current.nxt;
    current.nxt.pre = current.pre;

    this.size--;

    return "Deletion is complete."
  }

  empty() {
    return this.size == 0 ? true : false;
  }
}