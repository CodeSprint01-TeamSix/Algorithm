function solution(s) {
    let cnt = 0;
    let right = 0;
    let wrong = 0;
    let firstWord = s[0];
    
    for(let i = 0; i < s.length; i++) {
        if(firstWord === s[i]) {
            right++;
        } else {
            wrong++;
        }
        
        if(right === wrong) {
            right = 0;
            wrong = 0;
            cnt++;
            s = s.substring(i+1);
            firstWord = s[0];
            i = -1;
        }
        
        if(right !== wrong && i === s.length - 1) {
            cnt++;
        }
    }
    
    return cnt;
}