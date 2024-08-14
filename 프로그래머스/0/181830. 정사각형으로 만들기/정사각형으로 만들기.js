function solution(arr) {
    let arrLen = arr.length;
    let arrChildLen = arr[0].length;
    
    if(arrLen < arrChildLen) {
        for(let i = 0; i < arrChildLen - arrLen; i++) {
            arr.push(Array(arrChildLen).fill(0))
        }
    } else if(arrLen > arrChildLen) {
        for(let i = 0; i < arrLen; i++) {
            for(let j = 0; j < arrLen - arrChildLen; j++) {
                arr[i].push(0);
            }   
        }
    }
    return arr;
}