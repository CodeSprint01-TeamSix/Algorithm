const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let words = input.length === 0 ? [] : input.split(' ');

console.log(words.length);