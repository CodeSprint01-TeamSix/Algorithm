const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

  const N = Number(input.shift());

  let times = input
    .map((e) => e.split(' ').map(Number))
    .sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  
  let count = 1;
  let finish = times[0][1];
  
  for (let i = 1; i < N; i++) {
    if (finish <= times[i][0]) {
      count++;
      finish = times[i][1];
    }
  }
  
  console.log(count);