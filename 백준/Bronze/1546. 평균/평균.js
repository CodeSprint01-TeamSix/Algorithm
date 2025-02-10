const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');;

const N = parseInt(input[0])
const score = input[1].split(' ').map(Number);
const maxScore = Math.max(...score);
const newScore = score.map(e => e/maxScore * 100);
const sumScore = newScore.reduce((prev, cur) => prev + cur, 0);

console.log(sumScore / N)