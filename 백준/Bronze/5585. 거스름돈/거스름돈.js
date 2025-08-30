const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

  const N = Number(input);

  const coins = [500, 100, 50, 10, 5, 1];
  
  let change = 1000 - N;
  
  let count = 0;
  
  for (const coin of coins) {
    count += Math.floor(change / coin);
    change %= coin;
  }
  
  console.log(count);