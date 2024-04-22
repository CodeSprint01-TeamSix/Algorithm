function GCD(a, b) {
    let gcd = 1;
    
    for(let i = 2; i <= Math.min(a,b); i++) {
        if(a % i === 0 && b % i === 0) {
            gcd = i;
        }
    }
    return gcd;
}

function solution(a, b) {
    let x = a / GCD(a,b)
    let y = b / GCD(a,b)
    
    while(y % 2 === 0) y /= 2;
    while(y % 5 === 0) y /= 5;
    
    if(y === 1) return 1;
    return 2;
}