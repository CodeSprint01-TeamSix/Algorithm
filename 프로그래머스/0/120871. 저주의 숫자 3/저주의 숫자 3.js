function solution(n) {
    let newN = 0;
    
    while(n > 0) {
        if(newN % 3 !== 0 && !String(newN).includes('3')) {
            n--;
        }
        newN++;
    }
    return newN - 1;
}