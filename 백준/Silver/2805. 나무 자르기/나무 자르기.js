const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const [treeCount, need] = input[0].split(' ').map(Number);
const treesHeight = input[1].split(' ').map(Number);

let left = 0;
let right = Math.max(...treesHeight);
let result = 0;

const getWood = (height) =>
  treesHeight.reduce((sum, tree) => sum + Math.max(0, tree - height), 0);

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let wood = getWood(mid);

  if (wood >= need) {
    result = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(result);