function factorial(n) {
    let result = 1;
    for(let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

function solution(n) {
    let answer;
    
    for(let i = 1; i <= 10; i++) {
        if(factorial(i) <= n) {
            answer = i;
        }
    }
    return answer;
}