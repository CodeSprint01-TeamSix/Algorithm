const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const N = parseInt(input);

function createPattern(N) {
  let pattern = Array.from({ length: N }, () => Array(N).fill("*"));

  (function fillBlank(n, x, y) {
    if (n === 1) return;

    const div = n / 3;
    for (let i = x + div; i < x + 2 * div; i++) {
      for (let j = y + div; j < y + 2 * div; j++) {
        pattern[i][j] = " ";
      }
    }

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) continue;
        fillBlank(div, x + i * div, y + j * div);
      }
    }
  })(N, 0, 0);

  return pattern.map(row => row.join("")).join("\n");
}

const pattern = createPattern(N);
console.log(pattern);



//const N = parseInt(input);

//const patternMap = {};

//function printPattern(row, col) {
  //let r = row;
  //let c = col;
  //let key = `${r}-${c}`;

 // while (r !== 0) {
 //   if (patternMap[key]) {
  //    process.stdout.write(patternMap[key]);
  //    return;
  //  }

   // if (r % 3 === 1 && c % 3 === 1) {
   //   patternMap[key] = " ";
   //   process.stdout.write(" ");
   //   return;
  //  }

  //  r = Math.floor(r / 3);
  //  c = Math.floor(c / 3);
   // key = `${r}-${c}`;
  //}

 // patternMap[key] = "*";
  //process.stdout.write("*");
//}

//for (let i = 0; i < N; i++) {
  //for (let j = 0; j < N; j++) {
   // printPattern(i, j);
  //}
 // process.stdout.write(" ");
//}





//const N = parseInt(input);

//function printPattern(row, col) {
  //while (row !== 0) {
    // 0과 일치하면 * 찍기
   // if (row % 3 === 1 && col % 3 === 1) {
      // 3에 나눠지지 않을 때 빈공간
   //   process.stdout.write(" ");
    //  return;
   // }
   // row = Math.floor(row / 3);
   // col = Math.floor(col / 3);
 // }

 // process.stdout.write("*");
//}

//for (let i = 0; i < N; i++) {
 // for (let j = 0; j < N; j++) {
   // printPattern(i, j); // 처음엔 row가 0과 일치해서 N개 만큼 별 찍기
//  }
 // process.stdout.write("  ");
  // 이중 반복 끝나면 빈공간
//}
