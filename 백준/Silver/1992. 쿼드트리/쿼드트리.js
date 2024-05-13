let fs = require("fs");
let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const nums = input.slice(1).map((v) => v.split("").map(Number));

const quadTree = []; // 압축결과 저장

function recursion(n, x, y) { //쿼드트리 압축 수행
  let total = 0;

  // 1. 현재 영역 검사
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += nums[y + j][x + i];
    }
  }

  // 2. 전체 영역이 같은 값인지 확인
  if (total === 0) quadTree.push(0); //total이 0이면 영역이 전부 0 쿼드트리에 0추가
  else if (total === n * n) quadTree.push(1);//영역크기 제곱이 total과 같으면 1추가
  else {
    // 3. 4등분하여 재귀적으로 처리
    n /= 2;
    quadTree.push("(");
    recursion(n, x, y);
    recursion(n, x + n, y);
    recursion(n, x, y + n);
    recursion(n, x + n, y + n);
    quadTree.push(")");
  }
}

recursion(N, 0, 0);
console.log(quadTree.join(""));

/* nums= [
  [1, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 1, 1, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 0, 0, 1, 1, 0],
  [1, 1, 1, 1, 0, 0, 1, 1]
] */