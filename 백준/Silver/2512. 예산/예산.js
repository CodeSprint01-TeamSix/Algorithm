const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

const N = Number(input[0]);
let budgets = input[1].split(' ').map(Number);
let totalBudget = Number(input[2]);
// 상한액
let max = Math.max(...budgets);

if (totalBudget >= budgets.reduce((prev, cur) => prev + cur, 0)) {
  console.log(max);
} else {
  let low = 1;
  let high = max;
  let answer = 0;

  while (low <= high) {
    // 중간값
    let mid = Math.floor((low + high) / 2);
    let currentBudget = 0;

    for (const budget of budgets) {
      if (budget > mid) {
        currentBudget += mid;
      } else {
        currentBudget += budget;
      }
    }

    if (currentBudget <= totalBudget) {
      answer = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  console.log(answer);
}