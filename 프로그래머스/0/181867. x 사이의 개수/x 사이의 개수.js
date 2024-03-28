function solution(myString) {
    var answer = [];
    myString= myString.split('x')
    answer = myString.map(list => {
        return list.length
    })
    return answer;
}