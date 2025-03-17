const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const N = parseInt(input[0]);
const M = parseInt(input[1]);

let array = Array.from({ length: N + 1 }, () => Array(N + 1).fill(0));

for (let i = 2; i < input.length; i++) {
  const [a, b] = input[i].split(' ').map(Number);
  array[a][b] = 1;
  array[b][a] = -1;
}

for (let k = 1; k <= N; k++) {
  for (let i = 1; i <= N; i++) {
    for (let j = 1; j <= N; j++) {
      if (array[i][k] === 1 && array[k][j] === 1) array[i][j] = 1;
      if (array[i][k] === -1 && array[k][j] === -1) array[i][j] = -1;
    }
  }
}

let result = [];

for (let i = 1; i <= N; i++) {
  let count = 0;
  for (let j = 1; j <= N; j++) {
    if (i !== j && array[i][j] === 0) count++;
  }
  result.push(count);
}

console.log(result.join('\n'));