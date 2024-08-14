function solution(array, n) {
    array.sort((a,b) => a - b);
    let arr = array[0]
    let minDiff = Math.abs(n - array[0]);
    
    for(let i = 1; i < array.length; i++) {
        if(minDiff > Math.abs(n - array[i])) {
            minDiff = Math.abs(n - array[i]);
            arr = array[i];
        }
    }
    return arr;
};