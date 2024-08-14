function solution(strArr) {
    let result = {};
    
    strArr = strArr.map(e => e.length);
    
    for(let i = 0; i < strArr.length; i++) {
        result[strArr[i]] = (result[strArr[i]] || 0) + 1;
    }
    return Math.max(...Object.values(result))
}