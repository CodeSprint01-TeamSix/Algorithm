const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

input = input.map(Number);

const [up, down, goal] = input;

const upMinusDown = up - down;
const day = goal - down;

console.log(Math.ceil(day / upMinusDown))