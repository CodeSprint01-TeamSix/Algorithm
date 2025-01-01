function solution(lines) {
    let result = 0;
    let arr = new Array(200).fill(0);
    
    for(let i = 0; i < 3; i++) {
        let start = lines[i][0];
        let end = lines[i][1];
        
        for(let j = start; j < end; j++) {
            arr[j + 100] += 1;
        }
    }
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 1) result++;
    }
    
    return result;
}