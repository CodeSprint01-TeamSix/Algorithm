function solution(i, j, k) {
    let cnt = 0;
    
    for(let num = i; num <= j; num++) {
        const split = String(num).split('');
        
        for(let z = 0; z < split.length; z++) {
            if(split[z].includes(k)) cnt++;
        }
    }
 
    return cnt;
}