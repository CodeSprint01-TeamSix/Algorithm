const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

input.shift();  // 첫 번째 입력 값(데이터의 개수) 제거
input.sort((a, b) => a - b);

console.log(input.join('\n'));