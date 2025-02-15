const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();

let count = 0;

for(let i = 1; i <= input; i++) {
    let num = i.toString();
    let diff1 = parseInt(num[0]) - parseInt(num[1]);
    let diff2 = parseInt(num[1]) - parseInt(num[2]);
    
    if(num.length <= 2) {
        count++;
    } else {
        if(diff1 === diff2 ) {
            count++;
        }
    }
}

console.log(count)