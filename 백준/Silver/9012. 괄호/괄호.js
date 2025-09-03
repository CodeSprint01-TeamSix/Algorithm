const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const N = Number(input[0]);

for (let i = 1; i < input.length; i++) {
  const array = input[i].trim();
  let result = 0;
  let isNO = false;

  if (array.length % 2 !== 0) {
    console.log('NO');
    continue;
  }

  for (const char of array) {
    if (char === '(') {
      result++;
    } else {
      result--;
    }

    if (result < 0) {
      isNO = true;
      break;
    }
  }

  if (isNO || result !== 0) console.log('NO');
  else console.log('YES');
}