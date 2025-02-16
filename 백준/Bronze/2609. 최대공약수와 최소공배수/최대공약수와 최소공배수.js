const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

input = input.map(Number);

function GCD(a, b) {
    while(b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    
    return a;
}

function LCM(a, b) {
    return a * b / GCD(a, b);
}

console.log(GCD(input[0], input[1]))
console.log(LCM(input[0], input[1]))