function divition(n) {
    let cnt = 0;
    
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            cnt++;
        }
    }
    return cnt;
}

function solution(n) {
    let result = 0;
    
    for(let i = 4; i <= n; i++) {
        if(divition(i) >= 3) result++;
    }
    return result;
}