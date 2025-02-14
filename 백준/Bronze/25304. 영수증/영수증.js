const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const totalPrice = parseInt(input.shift());
let realPrice = 0;
input.shift();

for(let i = 0; i < input.length; i++) {
    input[i] = input[i].split(' ');
    realPrice += input[i][0] * input[i][1]
}

if(totalPrice === realPrice) {
    console.log('Yes')
} else {
    console.log('No')
}