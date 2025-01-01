function solution(n,a,b) {
    let cnt = 0;
    
    for(let i = 0; i < Math.log2(n); i++) {
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        cnt++;
        
        if(a === b) {
            return cnt;
        }
    }
}