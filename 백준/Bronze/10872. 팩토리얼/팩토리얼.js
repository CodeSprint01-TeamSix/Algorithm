const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = parseInt(input)
let result = 1;

while(true) {
    if(input <= 1) {
        console.log(result);
        break;
    }
    
    result *= input;
    input--;
}