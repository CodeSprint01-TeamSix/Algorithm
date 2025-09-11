const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input[0]);
const array = input.slice(1).map((e) => e.split(' ').map(Number));

const sortedArray = array.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
console.log(sortedArray.map((e) => e.join(' ')).join('\n'));