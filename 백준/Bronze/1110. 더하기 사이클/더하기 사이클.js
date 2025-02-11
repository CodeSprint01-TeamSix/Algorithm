const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let count = 0;
let newNumber = parseInt(input);

while(true) {
    let sum = Math.floor(newNumber / 10) + newNumber % 10;
    
    newNumber = (newNumber % 10) * 10 + sum % 10;

    count++;

    if(newNumber === parseInt(input)) {
        break;
    }
}

console.log(count);