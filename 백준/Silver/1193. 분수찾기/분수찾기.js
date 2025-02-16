const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = parseInt(input);

let count = 0;
let order = 1;

while (count < input) {
    count += order;
    order++;
}

let position = input - (count - (order - 1));

let numerator, denominator;

if ((order - 1) % 2 === 0) { 
    // 짝수 번째 줄 → 분자가 position
    numerator = position;
    denominator = (order - 1) - position + 1;
} else { 
    // 홀수 번째 줄 → 분모가 position
    numerator = (order - 1) - position + 1;
    denominator = position;
}

console.log(`${numerator}/${denominator}`);