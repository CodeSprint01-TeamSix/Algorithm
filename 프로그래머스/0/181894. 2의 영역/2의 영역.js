function solution(arr) {
    var answer = [];
    const start = arr.indexOf(2)
    const end = arr.lastIndexOf(2)
    if(start === -1 || end === -1) {
        answer.push(-1)
        return answer
    }
    answer = arr.slice(start, end+1)
    return answer;
}