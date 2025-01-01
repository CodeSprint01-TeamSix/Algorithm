function commonDivisor(n) {
    let cnt = 0;
    let sqareRoot = Math.sqrt(n)
    
    for(let i = 1; i <= sqareRoot; i++) {
        if(n % i === 0) {
            cnt++;
            if(i !== n / i) cnt++;
        }
    }
    return cnt;
}

function solution(number, limit, power) {
    let result = 0;
    
    for(let i = 1; i <= number; i++) {
        if(commonDivisor(i) > limit) {
            result += power;
        } else {
            result += commonDivisor(i);
        }
    }
    return result;
}