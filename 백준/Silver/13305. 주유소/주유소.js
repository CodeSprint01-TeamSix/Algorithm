const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const cities = Number(input[0]);
const roadLength = input[1].split(' ').map(Number);
const costs = input[2].split(' ').map(Number);
costs.pop();

let result = roadLength[0] * costs[0];

for (let i = 1; i < roadLength.length; i++) {
  costs[i] = Math.min(costs[i - 1], costs[i]);

  result += costs[i] * roadLength[i];
}

console.log(result);