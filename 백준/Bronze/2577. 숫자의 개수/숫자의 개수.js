const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let num = input.reduce((prev, cur) => prev * cur);
num = String(num)

const newArray = Array(10).fill(0);

for(let i = 0; i < num.length; i++) {
    newArray[num[i]]++;
}

console.log(newArray.join('\n'))
