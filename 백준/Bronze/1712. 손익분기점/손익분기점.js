const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const [fixedExpenses, variableCost, cost] = input;
const profitPerUnit = cost - variableCost;

if (profitPerUnit <= 0) {
  console.log(-1);
} else {
  console.log(Math.floor(fixedExpenses / profitPerUnit) + 1);
}