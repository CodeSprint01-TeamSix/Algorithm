const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let word = input[0].replace(/c=|c-|dz=|d-|lj|nj|s=|z=/g, 1);

console.log(word.length);