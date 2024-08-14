function solution(arr) {
    let num = 0;
    let arrLen = arr.length;
    
    while(Math.pow(2, num) < arrLen) {
        num++
    }
    
    for(let i = 0; i < (Math.pow(2, num) - arrLen); i++) {
        arr.push(0)
    }
    
    return arr;
}