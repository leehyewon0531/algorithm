function insert(idx, num, arr, len) {
  arr.splice(idx, 0, num);
}

function erase(idx, arr, len) {
  arr.splice(idx, 1);
}

function printArr(arr, len) {
  for(let i = 0; i < len; i++){
    console.log(arr[i]);
  }
  console.log();
}

function insert_test(arr) {
  console.log('Insert 전');
  printArr(arr, arr.length);
  insert(2, 100, arr, arr.length);
  console.log('Insert 후');
  printArr(arr, arr.length);
}

function erase_test(arr) {
  console.log('Erase 전');
  printArr(arr, arr.length);
  erase(3, arr, arr.length);
  console.log('Erase 후');
  printArr(arr, arr.length);
}

function main() {
  const array = [1, 3, 4, 2, 7, 5];
  insert_test(array);
  erase_test(array);
}

main();