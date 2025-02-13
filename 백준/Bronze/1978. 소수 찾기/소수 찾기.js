const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let prime = input[1].split(' ').map(Number);
const num = parseInt(input[0])
let result = 0;

for(let i = 0; i < num; i++) {
    let count = 0;
    for(let j = 2; j <= prime[i]; j++) {
        if(prime[i] > 1 && prime[i] % j === 0) count++;
    }
    
    if(count === 1) result++;
}

console.log(result)