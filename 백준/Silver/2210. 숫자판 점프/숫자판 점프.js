const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const board = input.map((number) => number.split(' ').map(Number));

const dx = [-1, 1, 0, 0]; // 상 하 좌 우우
const dy = [0, 0, 1, -1];

const uniqueNumber = new Set();

function dfs(x, y, number) {
  if (number.length === 6) {
    uniqueNumber.add(number);
    return;
  }

  for (let i = 0; i < 4; i++) {
    const nx = dx[i] + x;
    const ny = dy[i] + y;

    if (nx >= 0 && nx < 5 && ny >= 0 && ny < 5) {
      dfs(nx, ny, number + board[nx][ny].toString());
    }
  }
}

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    dfs(i, j, board[i][j].toString());
  }
}

console.log(uniqueNumber.size);