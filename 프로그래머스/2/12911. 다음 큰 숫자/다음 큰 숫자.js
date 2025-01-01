function solution(n) {
    let result = n+1;
    
    while(true) {
        if([...n.toString(2)].filter(e => e === '1').length === [...result.toString(2)].filter(e => e === '1').length) {
            break;
        } else {
            result++;
        }
    }
    
    return result;
}