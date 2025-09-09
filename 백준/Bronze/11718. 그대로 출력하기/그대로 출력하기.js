const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for (const word of input) {
  console.log(word);
}