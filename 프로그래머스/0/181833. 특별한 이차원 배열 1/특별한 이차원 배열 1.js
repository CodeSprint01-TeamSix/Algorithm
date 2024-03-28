function solution(n) {
    var answer = [];
    let dimensions = []
    for(let i = 0; i < n; i++) {
        dimensions = []
        for(let j = 0; j < n; j++) {
            if(i === j) {
                dimensions.push(1)
            } else {
                dimensions.push(0)
            }
        }
        answer.push(dimensions)
    }
    return answer;
}