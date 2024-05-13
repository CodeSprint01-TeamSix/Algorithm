const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, M] = input.map(Number);

let selected = [];
let visited = [];

function solution(num) {
  if (num === M) {
    console.log(selected.join(" "));
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      visited[i] = true;
      selected.push(i);
      solution(num + 1);
      selected.pop();
      visited[i] = false;
    }
  }
}

solution(0);
