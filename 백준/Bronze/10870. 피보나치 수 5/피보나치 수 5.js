const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

input = parseInt(input)

function fibonacci(n) {
    let array = [0, 1];
    
    if(n === 0) return 0;
    
    for(let i = 2; i <= n; i++) {
        array[i] = array[i - 2] + array[i - 1];
    }
    
    return array.pop();
}

console.log(fibonacci(input))