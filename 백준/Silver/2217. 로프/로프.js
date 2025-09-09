const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);
const weights = input.slice(1).map(Number);

const sortedWeights = weights.sort((a, b) => a - b);

let result = 0;

for (let i = 0; i < Math.ceil(N / 2); i++) {
  const max = Math.max(
    sortedWeights[i] * (N - i),
    sortedWeights[N - 1 - i] * (i + 1)
  );
  result = Math.max(result, max);
}

console.log(result);