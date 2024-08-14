function solution(arr) {
    for(let k = 0; k < arr.length; k++) {
        let nextArr = [...arr]
        
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] >= 50 && arr[i] % 2 === 0) {
                nextArr[i] = arr[i] / 2;
            } else if(arr[i] < 50 && arr[i] % 2 !== 0) {
                nextArr[i] = (arr[i] * 2) + 1;
            }
        }
        
        let cnt = 0;
        
        for(let i = 0; i < arr.length; i++) {
            if(arr[i] === nextArr[i]) cnt++;
        }
        if(cnt === arr.length) return k;
        
        arr = nextArr
    }
}