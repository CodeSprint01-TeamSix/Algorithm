const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')

  const K = input[0].split(' ').map(Number)[0];
  const N = input[0].split(' ').map(Number)[1];
  
  input.shift();
  const line = input.map(Number);
  
  let low = 1;
  let high = Math.max(...line);
  
  // 랜선 길이의의 범위 low ~ high
  let L = 0;
  
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
  
    // mid가 0이 되면 무한루프에 빠질 수 있으므로 예외처리
    if (mid === 0) mid = 1;
  
    // 모든 랜선을 mid 길이로 잘랐을 때 몇 개를 얻을 수 있는지
    const count = line.reduce((prev, cur) => prev + Math.floor(cur / mid), 0);
  
    if (count >= N) {
      L = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  console.log(L);