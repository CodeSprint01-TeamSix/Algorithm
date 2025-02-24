const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

const n = parseInt(input);

let count = 0;
let divisor = 5;

while (n >= divisor) {
  count += Math.floor(n / divisor);
  divisor *= 5;
}

console.log(count);