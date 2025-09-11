const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [total, award] = input[0].split(' ').map(Number);

const grades = input[1].split(' ').map(Number);

const sortedGrades = grades.sort((a, b) => b - a);
const result = sortedGrades.splice(award - 1, 1);
console.log(result[0]);