function gcd(a,b) {
    while(b > 0) {
        const temp = a % b;
        a = b
        b = temp
    }
    return a;
}

function solution(a, b) {
    b = b / gcd(a,b);
    
    while(b % 2 === 0 || b % 5 === 0) {
        if(b%2 === 0) b = b / 2;
        if(b%5 === 0) b = b / 5;
    }
    return b === 1 ? 1 : 2
}