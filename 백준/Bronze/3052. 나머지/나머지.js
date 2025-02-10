const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let count = [];

for(let i = 0; i < input.length; i++) {
    count.push(input[i] % 42);
}

const set = new Set(count)

console.log(set.size)