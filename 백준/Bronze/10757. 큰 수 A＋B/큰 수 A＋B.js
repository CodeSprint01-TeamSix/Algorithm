const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');

const [num1, num2] = input;

function addLargeNumbers(num1, num2) {
  // num1과 num2는 문자열로 받음

  let carry = 0; // 올림수를 처리하기 위한 변수
  let result = '';

  let i = num1.length - 1;
  let j = num2.length - 1;

  // 두 수를 끝자리부터 한 자릿수씩 더하기
  while (i >= 0 || j >= 0 || carry) {
    const digit1 = i >= 0 ? parseInt(num1[i]) : 0; // num1의 i번째 자릿수
    const digit2 = j >= 0 ? parseInt(num2[j]) : 0; // num2의 i번째 자릿수

    let sum = digit1 + digit2 + carry; // 두 자릿수의 합과 올림수 처리
    carry = Math.floor(sum / 10); // 올림수 계산
    result = (sum % 10) + result; // 현재 자릿수 계산 후 결과에 추가

    i--;
    j--;
  }

  return result;
}

console.log(addLargeNumbers(num1, num2));