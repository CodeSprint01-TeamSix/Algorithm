const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

let prize = 0;

if(input[0] === input[1] && input[0] === input[2] && input[1] === input[2]) {
    prize = 10000 + input[0] * 1000;
} else if(input[0] === input[1]) {
    prize = 1000 + input[0] * 100;
} else if(input[0] === input[2]) {
    prize = 1000 + input[0] * 100;
} else if(input[1] === input[2]) {
    prize = 1000 + input[1] * 100;
} else {
    prize = Math.max(...input) * 100;
}

console.log(prize)