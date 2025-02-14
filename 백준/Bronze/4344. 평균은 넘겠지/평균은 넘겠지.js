const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let result = [];

for(let i = 1; i < input.length; i++) {
    result[i] = input[i].split(' ');
    const num = result[i].shift()
    
    const sum = result[i].reduce((prev, cur) => parseInt(prev) + parseInt(cur), 0)
    result[i] = (sum / num)
    
    input[i] = input[i].split(' ');
    input[i].shift()
}

result.shift();
input.shift();

for(let i = 0; i < input.length; i++) {
    let count = 0;
    const num = input[i].length;
    
    for(let j = 0; j < input[i].length; j++) {
        if(input[i][j] > result[i]) count++;
    }

    result[i] = (count*100 / num).toFixed(3)
}

result = result.map(e => e + '%').join('\n');

console.log(result)