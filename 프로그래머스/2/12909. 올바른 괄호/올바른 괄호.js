// 첫번째 풀이
function solution(s){
    let left = 0;
    let right = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            left++;
        } else {
            right++;
        }
        if(right > left) return false;
    }
    return s[0] === '(' && s[s.length - 1] === ')' && left === right ? true : false;
}

// 두번째 풀이
function solution(s){
    let result = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === '(') {
            result++;
        } else {
            result--;
        }
        if(result < 0) return false;
    }
    return result !== 0 ? false : true;
}
