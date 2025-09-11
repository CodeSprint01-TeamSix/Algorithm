const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const num = Number(input.splice(0, 1));

for (let i = 0; i < num; i++) {
  let result = 1;

  let newArray = input.splice(0, 1);
  const arrayCount = Number(newArray[0]);

  const sortedArray = input
    .splice(0, arrayCount)
    .map((e) => e.split(' ').map(Number))
    .sort((a, b) => a[0] - b[0]);

  let max = sortedArray[0][1];

  for (let j = 1; j < sortedArray.length; j++) {
    if (max > sortedArray[j][1]) {
      max = sortedArray[j][1];
      result++;
    }
  }

  console.log(result);
}