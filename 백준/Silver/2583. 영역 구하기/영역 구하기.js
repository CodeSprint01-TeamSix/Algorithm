const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const [M, N, K] = input[0].split(' ').map(Number);
const visited = Array.from({ length: M }, () => Array(N).fill(false));
const board = Array.from({ length: M }, () => Array(N).fill(0));
const array = input.slice(1).map((line) => line.split(' ').map(Number));

for (let i = 0; i < K; i++) {
  const [c1, r1, c2, r2] = array[i];

  for (let j = r1; j < r2; j++) {
    for (let z = c1; z < c2; z++) {
      board[j][z] = 1;
    }
  }
}

const directions = [
  [1, 0], // 상
  [-1, 0], // 하
  [0, -1], // 좌
  [0, 1], // 우
];

let allSection = [];

const bfs = (x, y) => {
  let queue = [[x, y]];
  visited[x][y] = true;
  let section = 0;
  if (board[x][y] === 0) section++;

  while (queue.length) {
    const [qx, qy] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = qx + dx;
      const ny = qy + dy;

      if (
        nx >= 0 &&
        nx < M &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        board[nx][ny] !== 1
      ) {
        queue.push([nx, ny]);
        visited[nx][ny] = true;
        if (board[nx][ny] === 0) section++;
      }
    }
  }

  allSection.push(section);
};

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (!visited[i][j] && board[i][j] !== 1) bfs(i, j);
  }
}

console.log(allSection.length);
console.log(allSection.sort((a, b) => a - b).join(' '));