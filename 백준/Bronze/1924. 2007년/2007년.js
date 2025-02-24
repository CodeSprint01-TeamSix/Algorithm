const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [currentMonth, currentDate] = input;

const date = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let sum = 0;

for (let i = 0; i < currentMonth; i++) {
  sum += date[i];
}

sum += currentDate;

console.log(day[sum % 7]);