function solution(arr) {
    var answer = 0;
    for(let i = 0; i < arr.length; i++) {
        let plag = false
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] !== arr[j][i]) {
                answer = 0;
                plag = true
                break;
            } else {
                answer = 1
            }
        }
        if(plag) break
    }
    return answer;
}