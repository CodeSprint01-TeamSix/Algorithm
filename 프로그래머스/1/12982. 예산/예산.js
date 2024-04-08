function solution(d, budget) {
    d.sort((a,b) => a - b);
    let result = 0;
    let answer = 0;
    if(d[0] > budget) return 0;
    
    for(let i = 0; i < d.length; i++) {
        if(result < budget) {
            result += d[i]
            answer++;
        } else if(result > budget) {
            answer--;
            return answer;
        } 
    }
    return answer;
}
