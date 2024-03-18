function solution(s) {
    let answer = '';
    let cnt = 0;
    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++) {
        if(cnt === 0) {
            answer += s[i].toUpperCase();
            cnt++;
        }else{
            answer += s[i];
            cnt++;
        }
        
        if(s[i] === ' '){
            cnt = 0;
        }
    }
    return answer;
}