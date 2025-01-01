function GCD(a, b) {
    while(b > 0) {
        let temp = b;
        b = a%b;
        a = temp;
    }
    return a;
}

function solution(arr) {
    let result = 0;
    
    for(let i = 0; i < arr.length - 1; i++) {
        if(result) {
            result = arr[i+1] * result / GCD(arr[i+1], result)
        } else {
            result = arr[i] * arr[i+1] / GCD(arr[i], arr[i+1])
        }
    }
    return result
}