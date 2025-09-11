const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim()

const array = input.split(' ').map(Number);
const sortedArray = array.sort((a, b) => a - b);
console.log(sortedArray.join(' '));