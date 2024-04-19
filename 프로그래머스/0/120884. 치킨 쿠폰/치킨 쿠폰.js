function solution(chicken) {
    let cnt = 0;
    let result = 0;
    
    while(chicken > 0) {
        cnt++;
        chicken--;
        
        if(cnt === 10) {
            chicken++;
            cnt = 0;
            result++;
        } 
    }
    return result;
}