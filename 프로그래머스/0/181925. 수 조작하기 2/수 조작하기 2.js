function solution(numLog) {
    let result = '';
    for(let i = 0; i < numLog.length; i++) {
        if(numLog[i] + 1 === numLog[i+1]) {
            result += 'w';
        } else if(numLog[i] - 1 === numLog[i+1]) {
            result += 's';
        } else if(numLog[i] + 10 === numLog[i+1]) {
            result += 'd';
        } else if(numLog[i] - 10 === numLog[i+1]) {
            result += 'a';
        }
    }
    return result;
}