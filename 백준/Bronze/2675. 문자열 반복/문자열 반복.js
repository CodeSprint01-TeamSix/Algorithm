const fs = require('fs');
let input = fs
  .readFileSync('/dev/stdin')
  .toString()
  .trim()
  .split('\n')
  .map((e) => e.trim());

for (let i = 0; i < input.length; i++) {
  let [repeat, str] = input[i].split(' ');
  let result = '';

  if (str !== undefined) {
    for (const char of str) {
      result += char.repeat(parseInt(repeat));
    }
  } else {
    continue;
  }

  console.log(result);
}