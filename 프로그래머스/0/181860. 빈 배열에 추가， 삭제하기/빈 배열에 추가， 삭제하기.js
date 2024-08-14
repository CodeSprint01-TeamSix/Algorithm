function solution(arr, flag) {
    let result = [];
    
    for(let i = 0; i < arr.length; i++) {
        if(flag[i]) {
            result.push(...Array(arr[i]*2).fill(arr[i]));
        } else {
            result.splice(-arr[i], arr[i]);
        }
    }
    return result;
}