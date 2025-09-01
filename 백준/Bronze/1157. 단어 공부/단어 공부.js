const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// 대소문자 구분 제거
const words = input.join('').toLowerCase();

if (words.length === 1) {
  console.log(words.toUpperCase());
  return;
}

const map = new Map();

for (const word of words) {
  map.set(word, (map.get(word) || 0) + 1);
}

const sortedMap = [...map].sort((a, b) => b[1] - a[1]);

if (sortedMap.length > 1 && sortedMap[0][1] === sortedMap[1][1]) {
  console.log('?');
} else {
  console.log(sortedMap[0][0].toUpperCase());
}