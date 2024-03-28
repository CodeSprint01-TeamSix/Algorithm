function solution(strArr) {
    var answer = [];
    answer = strArr.filter(str => !str.includes('ad'))
    return answer;
}