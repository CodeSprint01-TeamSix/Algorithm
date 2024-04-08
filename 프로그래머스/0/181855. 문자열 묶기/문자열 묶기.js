function solution(strArr) {
    var answer = 0;
    const table = {}
    
    strArr.forEach(str => {
        let length = str.length 
        table[length] = 0
    })
    strArr.forEach(str => {
        let length = str.length 
        table[length] = ++table[length]
    })
    answer = Math.max(...Object.values(table))
    return answer;
}