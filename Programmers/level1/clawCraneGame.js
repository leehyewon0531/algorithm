class Stack {
  constructor() {
      this.arr = []
  }
  push(item) {
      this.arr.push(item)
  }
  pop() {
      if(this.empty()) {
          return -1
      } else {
          return this.arr.pop()
      }
  }
  peek() {
      if(this.empty()) {
          return -1
      } else {
          return this.arr[this.arr.length - 1]
      }
  }
  empty() {
      if(this.arr.length === 0){
          return true
      } else {
          return false
      }
  }
}

function remakeBoard(board) {
  const arr = []
  const len = board.length
  
  for(let i = 0; i < len; i++) {
      arr[i] = new Array(len)
      for(let j = 0; j < len; j++) {
          arr[i][j] = board[j][i]
      }
  }
  return arr
}

function solution(board, moves) {
  board = remakeBoard(board)
  const dolls = new Stack()
  let count = 0
  
  for(let i = 0; i < moves.length; i++) {
      for(let j = 0; j < board.length; j++) {
          if(board[moves[i]-1][j] !== 0){
              if(dolls.peek() === board[moves[i]-1][j]) {
                  count += 2
                  dolls.pop()
                  board[moves[i]-1][j] = 0
              } else {
                  dolls.push(board[moves[i]-1][j])
                  board[moves[i]-1][j] = 0
              }
              j = board.length
          }
      }
  }
  return count
}