const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

for(let i = 1; i < input.length; i++) {
    let [H, W, N] = input[i].split(' ').map(Number);
    
    let height = N % H === 0 ? H : N % H;
    let width = Math.ceil(N / H);
    
    console.log(height.toString() + (width < 10 ? '0' : '') + width);
}