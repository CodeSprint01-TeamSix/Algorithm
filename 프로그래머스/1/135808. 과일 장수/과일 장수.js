function solution(k, m, score) {
    let sortScore = score.sort((a,b) => b - a);
    let result = 0;
    let cnt = 0;
    let temp = [];
    
    for(let i = 0; i <= sortScore.length; i++) {
        if(cnt === m) {
            result += Math.min(temp[m - 1]) * m;
            temp = [];
            cnt = 0;
        }
        temp.push(sortScore[i]);
        cnt++;   
    }
    
    return result;
}