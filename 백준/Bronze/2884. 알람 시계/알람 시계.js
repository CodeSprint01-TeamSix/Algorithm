const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map((e) => parseInt(e));

let hours = input[0];
let minutes = input[1];

if (minutes < 45) {
  hours -= 1;
  minutes += 15;
} else {
  minutes -= 45;
}

if (hours < 0) {
  hours = 23;
}

console.log(hours, minutes);