function solution(A, B) {
    let cnt = 0;
    
    if(A === B) return 0
    
    for(let i = 0; i < A.length; i++) {
        if(A === B) {
            return cnt;
        } else {
            A = A.substr(A.length - 1) + A.substring(0, A.length - 1);
            cnt++;
        }
    }
    return -1;
}