function solution(s) {
    let result = 0;
    let split = s.split(' ');
    
    for(let i = 0; i < split.length; i++) {
        if(split[i] === 'Z') {
            result -= split[i-1];
        } else {
            result += +split[i]
        }
    }
    return result;
}