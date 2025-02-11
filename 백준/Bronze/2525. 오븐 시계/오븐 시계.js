const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');


const currentTime = input[0].split(' ');
const plusTime = input[1];

let totalTime = [];

totalTime[0] = parseInt(currentTime[0]) + Math.floor((parseInt(currentTime[1]) + parseInt(plusTime)) / 60);
totalTime[1] = (parseInt(currentTime[1]) + parseInt(plusTime)) % 60;

if(totalTime[0] >= 24) {
 totalTime[0] = totalTime[0] - 24;   
}

console.log(totalTime.join(' '))