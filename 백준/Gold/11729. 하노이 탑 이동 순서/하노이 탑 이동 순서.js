const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString();

let N = Number(input); // 원판 갯수
let count = 0;
let answer = [];

// num: 원판 갯수
// from: 출발 기둥
// temp: 임시 기둥
// to: 목적지 기둥

function Hanoi(num, from, temp, to) {
  if (num === 0) {
    return;
  } else {
    Hanoi(num - 1, from, to, temp);
    // 받아온 원반 갯수보다 하나 적은 원반들을 목적지가 아닌 곳으로 재귀적으로 이동
    answer.push([from, to]);
    // 맨 아래 원반을 목적지로 이동시킴
    count++;
    Hanoi(num - 1, temp, from, to);
    //다른 곳으로 옮겼던 원반들을 그 위에 얹음
  }
}

Hanoi(N, '1', '2', '3');
console.log(count);
console.log(answer.map((element) => element.join(' ')).join('\n'));