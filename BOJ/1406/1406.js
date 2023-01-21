// 미완성 -> insert 😣
const fs = require('fs');
const input = fs.readFileSync('BOJ/test.txt').toString().trim().split('\n');
const initStr = input[0].split('');
const comandCnt = parseInt(input[1]);

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class Editor {
  constructor(node) {
    this.head = node;
    this.size = 1;
    this.cursor = null;
  }

  insert(node) {
    let current = this.head;

    if(this.empty()) {
      this.head = node;
      this.size++;
      this.cursor = node;
      return `Insertion is complete. The size is ${this.size}.`;
    }

    // 마지막 원소를 찾는 루프
    for(let i = 1; i < this.size + 1; i++) {
      if(current.next !== null){
        current = current.next;
      }
    }

    current.next = node;
    data.prev = current;
    this.cursor = node;
    return `Insertion is complete. The size is ${this.size}.`;
  }

  left() {
    if(this.cursor == this.head) {
      return `The cursor is on the far left.`;
    }

    this.cursor = this.cursor.prev;
    return `The cursor has moved one space to the left.`;
  }

  right() {
    if(this.cursor.next == null) {
      return `The cursor is on the far right.`;
    }

    this.cursor = this.cursor.next;
    return `The cursor has moved one space to the right.`;
  }

  delete() {
    if(this.empty()) return `The list is empty.`;

    this.cursor.prev.next = this.cursor.next;
    this.cursor.next.prev = this.cursor.prev;
    this.cursor = this.cursor.next;
    return `Deletion is complete.`;
  }

  returnStr() {
    // 리스트에 있는 글자들을 문자열 형태로 반환해주는 함수
    let str = "";
    let current = this.head;

    while(current.next !== null) {
      console.log(current);
      str += current.value;
      current = current.next;
    }

    return str;
  }

  empty() {
    return this.size == 0 ? true : false;
  }
}

function solution() {
  const firstNode = new Node(initStr[0]);
  const list = new Editor(firstNode);

  for(let i = 1; i < initStr.length - 1; i++) {
    console.log(initStr[i]);
    list.insert(new Node(initStr[i]));
  }

  list.returnStr();
  
}

solution();