function solution(myString) {
    var answer = [];
    answer = myString.split('x').sort().filter(list => list !== '')
    return answer;
}