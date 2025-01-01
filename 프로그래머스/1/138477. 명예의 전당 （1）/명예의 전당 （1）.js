function solution(k, score) {
    let copyScore = [...score];
    let temp = [score[0]];
    let result = [score[0]];
    
    for(let i = 1; i < score.length; i++) {
        if(temp.length < k) {
            temp.push(copyScore[i])
        } else {
            temp.sort((a,b) => a - b);
            if(temp[0] < copyScore[i]) {
                temp.shift();
                temp.push(copyScore[i])
            }
        }
        result.push(Math.min(...temp))
    }
    return result;
}