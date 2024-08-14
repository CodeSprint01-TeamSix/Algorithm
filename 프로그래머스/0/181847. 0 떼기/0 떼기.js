function solution(n_str) {
    let newStr = [...n_str]
    while(newStr[0] === '0') {
        newStr.shift();
    }
    return newStr.join('')
}