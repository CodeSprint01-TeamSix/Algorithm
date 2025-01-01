function solution(n, t, m, p) {
    let arr = '';
    let cnt = 0;
    let result = '';
    const len = t * m
    
    while(arr.length < len) {
        arr += cnt.toString(n);
        cnt++;
    }
    
    arr = arr.toUpperCase();
    
    for(let i = 0; i < len; i++) {
        if(m - p !== 0) {
            if((i+1) % m === p) {
                result += arr[i];
            }
        } else {
            if((i+1) % m === 0) {
                result += arr[i];
            }
        }
    }
    
    return result;
}