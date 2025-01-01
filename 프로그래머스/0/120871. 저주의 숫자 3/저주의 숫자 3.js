function solution(n) {
    let result = n;
    
    for(let i = 1; i <= n; i++) {
        if(i % 3 === 0 || i.toString().includes(3)) {
            result++;
            n++;
        }
    }
    
    return result;
}