function solution(n) {
    let prime = Array(n+1).fill(true);
    prime[0] = prime[1] = false;
    
    for(let i = 2; i <= Math.sqrt(n); i++) {
        if(prime[i]) {
            for(let j = i * i; j <= n; j += i) {
                prime[j] = false;
            }
        }
    }
    
    let cnt = 0;
    for(let i = 2; i <= n; i++) {
        if(prime[i]) cnt++;
    }
    return cnt;
}
// 에라토스테네스의 체 알고리즘을 사용해야 함
// 1. 2부터 시작하여 차례대로 소수인지 여부를 기록하는 배열을 만듭니다.
// 2. 2부터 시작하여 현재 숫자의 배수들을 모두 소수가 아닌 것으로 체크합니다.
// 3. 이 과정을 반복하여 남아 있는 수들이 모두 소수가 되도록 합니다.


// 첫 번째 풀이 효율성에서 실패

// function solution(n) {
//     let result = 0;
//     let prime_number = 0;

//     for(let i = 2; i <= n; i++) {
//         for(let j = 1; j <= n; j++) {
//             if(i % j === 0) prime_number++;
//         }
//         if(prime_number === 2) result++;
//         prime_number = 0;
//     }
//     return result;
// }