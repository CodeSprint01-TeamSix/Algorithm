function solution(score) {
    let avg = score.map(e => (e[0] + e[1]) / 2);
    let arr = Array(score.length).fill(1);
    
    for(let i = 0; i < avg.length; i++) {
        for(let j = 0; j < avg.length; j++) {
            if(avg[i] < avg[j]) {
                arr[i]++;
            } 
        }
    }
    return arr;
}