function solution(dots) {
    const pairs = [
        [0, 1, 2, 3],
        [0, 2, 1, 3],
        [0, 3, 2, 1],
    ]
    
    for(const [i, j, k, l] of pairs) {
        const [x1, y1] = dots[i];
        const [x2, y2] = dots[j];
        const [x3, y3] = dots[k];
        const [x4, y4] = dots[l];
        
        if((x1 - x2) * (y3 - y4) === (x3 - x4) * (y1 - y2)) return 1;
    }
    
    return 0;
}