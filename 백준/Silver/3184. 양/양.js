const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const [R, C] = input[0].split(' ').map(Number);
const map = input.slice(1).map((line) => line.split(''));
const visited = Array.from({ length: R }, () => Array(C).fill(false));

let totalSheep = 0;
let totalWolves = 0;

const directions = [
  [-1, 0], // 상
  [1, 0], // 하
  [0, -1], // 좌
  [0, 1], // 우
];

const bfs = (x, y) => {
  let queue = [[x, y]];
  visited[x][y] = true;

  let sheep = 0;
  let wolves = 0;

  if (map[x][y] === 'o') sheep++;
  if (map[x][y] === 'v') wolves++;

  while (queue.length) {
    const [qx, qy] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = qx + dx;
      const ny = qy + dy;

      if (
        nx >= 0 &&
        nx < R &&
        ny >= 0 &&
        ny < C &&
        !visited[nx][ny] &&
        map[nx][ny] !== '#'
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);

        if (map[nx][ny] === 'o') sheep++;
        if (map[nx][ny] === 'v') wolves++;
      }
    }
  }

  if (sheep > wolves) totalSheep += sheep;
  else totalWolves += wolves;
};

for (let i = 0; i < R; i++) {
  for (let j = 0; j < C; j++) {
    if (!visited[i][j] && map[i][j] !== '#') bfs(i, j);
  }
}

console.log(totalSheep, totalWolves);