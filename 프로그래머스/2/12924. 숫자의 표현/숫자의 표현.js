function solution(n) {
    var answer = 0;
    let result = []
    let index = 1;
     for (let i = 1; i <= n; i++) {
        if (n % i === 0 && i % 2 === 1) { // 약수이면서 홀수인 경우
            result.push(i)
            answer += 1;
        }
    }
    console.log(result)
    return answer;
}