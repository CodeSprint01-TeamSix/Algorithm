const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [noHeardNum, noSeeNum] = input[0].split(' ').map(Number);
const noHeardSet = new Set(input.slice(1, noHeardNum + 1));
const noSeeSet = new Set(input.slice(noHeardNum + 1));

const result = [];

for (const name of noSeeSet) {
  if (noHeardSet.has(name)) {
    result.push(name);
  }
}

result.sort()

console.log(result.length);
console.log(result.join('\n'));