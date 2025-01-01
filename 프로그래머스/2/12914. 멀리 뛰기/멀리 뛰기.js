function Fibonacci(n) {
    if(n === 0) return 1;
    if(n === 1) return 1;
    
    return Fibonacci(n - 1) + Fibonacci(n - 2);
}

function solution(n) {
    let result = [1,1]
    
    for(let i = 2; i <= n; i++) {
        result.push((result[i-1] + result[i-2]) % 1234567);
    }
    
    return  result[n]
}