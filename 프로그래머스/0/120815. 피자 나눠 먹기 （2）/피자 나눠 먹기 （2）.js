function solution(n) {
    let peices = 6;
    
    while(peices % n !== 0) {
        peices += 6;
    }
    return peices / 6;
}