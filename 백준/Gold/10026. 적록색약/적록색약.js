const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

const N = parseInt(input[0]);
const allBoard = input.slice(1).map((line) => line.split(''));
const redGreenBoard = allBoard.map((e) =>
  e.map((color) => (color === 'R' ? 'G' : color))
);

const directions = [
  [-1, 0],
  [1, 0],
  [0, -1],
  [0, 1],
];

const bfs = (x, y, board, visited) => {
  let queue = [[x, y]];
  visited[x][y] = true;
  let color = board[x][y];

  while (queue.length) {
    const [qx, qy] = queue.shift();

    for (const [dx, dy] of directions) {
      const nx = qx + dx;
      const ny = qy + dy;

      if (
        nx >= 0 &&
        nx < N &&
        ny >= 0 &&
        ny < N &&
        !visited[nx][ny] &&
        board[nx][ny] === color
      ) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }
};

const countArea = (board) => {
  const visited = Array.from({ length: N }, () => Array(N).fill(false));
  let section = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visited[i][j]) {
        bfs(i, j, board, visited);
        section++;
      }
    }
  }

  return section;
};

console.log(countArea(allBoard), countArea(redGreenBoard));