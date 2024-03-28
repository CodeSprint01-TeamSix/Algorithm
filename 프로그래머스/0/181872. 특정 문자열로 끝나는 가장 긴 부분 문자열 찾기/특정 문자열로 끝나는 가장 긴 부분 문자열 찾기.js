function solution(myString, pat) {
    var answer = '';
    const end = myString.lastIndexOf(pat) + pat.length
 
    answer = myString.slice(0, end)
    return answer;
}