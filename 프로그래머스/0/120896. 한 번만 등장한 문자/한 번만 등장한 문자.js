function solution(s) {
    let result = '';
    s = [...s].sort();
    
    for(let i = 0; i < s.length; i++) {
        if(s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            result += s[i];
        }
    }
    return result;
}