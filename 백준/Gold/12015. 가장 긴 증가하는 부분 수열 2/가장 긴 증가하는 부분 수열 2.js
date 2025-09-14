const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
const array = input[1].split(' ').map(Number);

const result = [];

function changeNum(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

for (let i = 0; i < num; i++) {
  if (result.length === 0 || result[result.length - 1] < array[i]) {
    result.push(array[i]);
  } else {
    let index = changeNum(result, array[i]);
    result[index] = array[i];
  }
}

console.log(result.length);