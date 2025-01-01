function prime(num) {
    num = Number(num);
    let cnt = 0;
    
    if(num < 2) return false;
    
    for(let i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) cnt++;
    }
    
    return cnt ? false : true;
}

function solution(n, k) {
    let result = 0;
    let num = n.toString(k);
    
    const parts = num.split('0');
    
    for(let i = 0; i < parts.length; i++) {
        if(prime(parts[i])) result++;
    }
    
    return result;
}